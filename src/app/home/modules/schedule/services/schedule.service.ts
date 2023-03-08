import { Injectable } from '@angular/core';
import { collection, collectionSnapshots, Firestore } from '@angular/fire/firestore';
import { merge, Observable } from 'rxjs';
import { map, switchMap, publishReplay, refCount, distinctUntilChanged, filter, first } from 'rxjs/operators';

import { StorageService } from '@ngbe/services';

import { SpeakersService } from '../../speakers/services/speakers.service';

import { ScheduleItem } from '../entities';

@Injectable({
	providedIn: 'root',
})
export class ScheduleService {
	private remoteSchedule$: Observable<ScheduleItem[]> = collectionSnapshots<Omit<ScheduleItem, 'id'>>(
		collection(this.db, 'schedule') as any
	).pipe(
		filter((rawData) => rawData.length > 0),
		map((rawData) => {
			return rawData
				.map<ScheduleItem>((rawValue) => {
					const id = rawValue.id;
					const data = rawValue.data();

					return {
						id,
						...data,
					};
				})
				.sort((a: ScheduleItem, b: ScheduleItem) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
		}),
		switchMap((items) => this.storage.set('schedule', items))
	);
	private localSchedule$: Observable<ScheduleItem[]> = this.storage.get<ScheduleItem[]>('schedule');

	schedule$: Observable<ScheduleItem[]> = merge(this.remoteSchedule$, this.localSchedule$).pipe(
		filter(Boolean),
		// Make sure it doesn't emit twice when the remote and local data is indentical
		distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
		publishReplay(1),
		refCount()
	);

	loading$: Observable<boolean> = this.schedule$.pipe(map((items) => !Boolean(items)));

	constructor(
		private readonly db: Firestore,
		private readonly storage: StorageService,
		private readonly speakersService: SpeakersService,
	) {}

	itemById(id: string): Observable<ScheduleItem | undefined> {
		return this.schedule$.pipe(
			first(),
			map((items) => items.find((item) => item.id === id))
		);
	}
}
