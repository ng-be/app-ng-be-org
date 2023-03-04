import { Component, Inject } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DOCUMENT } from '@angular/common';
import { SwUpdate } from '@angular/service-worker';
import { filter, switchMap, tap } from 'rxjs/operators';

import { environment } from '../environments/environment';

@Component({
	selector: 'ngbe-app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	constructor(
		private readonly toastController: ToastController,
		private readonly serviceWorker: SwUpdate,

		@Inject(DOCUMENT) private document: Document
	) {}

	async ngOnInit() {
		if (environment.production) {
			this.serviceWorker.versionUpdates
				.pipe(
					filter((event) => event.type === 'VERSION_READY'),
					switchMap(() =>
						this.toastController.create({
							message: 'New version available!',
							buttons: [
								{
									text: 'Update',
									handler: () => {
										this.document.location.reload();
									},
								},
							],
						})
					),
					tap(async (toast) => {
						toast.present();
					})
				)
				.subscribe();
		}
	}
}
