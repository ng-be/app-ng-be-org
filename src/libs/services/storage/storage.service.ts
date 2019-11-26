import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class StorageService {
	get<T>(key: string) {
		return new Observable<T>(observer => {
			let data = window.localStorage.getItem(key);
			const metaData = window.localStorage.getItem(`${key}__meta`);

			if (metaData === 'object') {
				data = JSON.parse(data);
			}

			observer.next(data as any);
			observer.complete();
		});
	}

	set<T>(key: string, data: T) {
		return new Observable<T>(observer => {
			if (typeof data === 'object') {
				window.localStorage.setItem(key, JSON.stringify(data));
				window.localStorage.setItem(`${key}__meta`, 'object');
			} else {
				window.localStorage.setItem(key, data as any);
			}

			observer.next(data);
			observer.complete();
		});
	}
}
