import { Injectable } from '@angular/core';
import { collection, collectionSnapshots, Firestore } from '@angular/fire/firestore';
import { merge, Observable } from 'rxjs';
import { map, switchMap, publishReplay, refCount, distinctUntilChanged, filter, tap, first } from 'rxjs/operators';

import { StorageService } from '@ngbe/services';

import { Speaker } from '../entities';

@Injectable({
	providedIn: 'root',
})
export class SpeakersService {
	private remoteSpeakers$: Observable<Speaker[]> = collectionSnapshots<Omit<Speaker, 'id'>>(
		collection(this.db, 'speakers') as any
	).pipe(
		filter((rawData) => rawData.length > 0),
		map((rawData) => {
			return rawData
				.map((rawValue) => {
					const id: string = rawValue.id;
					const data: any = rawValue.data();

					this.prefetch(data.picture);

					return {
						id,
						...data,
					};
				})
				.sort((a, b) => `${a.firstName} ${a.name}`.localeCompare(`${b.firstName} ${b.name}`));
		}),
		switchMap((speakers) => this.storage.set('speakers', speakers))
	);
	private localSpeakers$: Observable<Speaker[]> = this.storage.get<Speaker[]>('speakers');

	speakers$: Observable<Speaker[]> = merge(this.remoteSpeakers$, this.localSpeakers$).pipe(
		filter(Boolean),
		// Make sure it doesn't emit twice when the remote and local data is indentical
		distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
		publishReplay(1),
		refCount()
	);

	loading$: Observable<boolean> = this.speakers$.pipe(map((speakers) => !Boolean(speakers)));

	constructor(
		private readonly db: Firestore,
		private readonly storage: StorageService
	) {}

	itemById(id: string): Observable<Speaker | undefined> {
		return this.speakers$.pipe(
			first(),
			map((items) => items.find((item) => item.id === id))
		);
	}

	private prefetch(url: string): void {
		const img = new Image();
		img.src = url;
	}
}
