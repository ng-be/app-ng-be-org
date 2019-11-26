import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class BrowserService {
	/**
	 * Opens the provided `url` in the native web browser.
	 *
	 * @param url - URL to open.
	 */
	open(url: string) {
		window.open(url, '_blank');
	}
}
