import {Component, Inject, OnInit} from '@angular/core';
import {ToastController} from '@ionic/angular';
import {DOCUMENT} from '@angular/common';
import {SwUpdate} from '@angular/service-worker';
import {switchMap, tap} from 'rxjs/operators';

import {environment} from '../../environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: 'root.component.html',
	styleUrls: ['root.component.scss']
})
export class RootComponent implements OnInit {
	constructor(
		private readonly toastController: ToastController,
		private readonly serviceWorker: SwUpdate,

		@Inject(DOCUMENT) private document
	) {}

	ngOnInit(): void {
		if (environment.production) { // tslint:disable-line:early-exit
			this.serviceWorker.available.pipe(
				switchMap(() => this.toastController.create({
					message: 'New version available',
					closeButtonText: 'Update',
					showCloseButton: true
				})),
				switchMap(async toast => {
					toast.present();

					return toast.onDidDismiss();
				}),
				tap(() => {
					this.document.location.reload();
				})
			).subscribe();
		}
	}
}
