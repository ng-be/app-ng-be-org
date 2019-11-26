import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Observable} from 'rxjs';

import {BrowserService} from '@ngbe/services';

import {SpeakersService} from '../../services/speakers.service';
import {Speaker} from '../../entities';
import {SpeakerDetailComponent} from '../speaker-detail/speaker-detail.component';

@Component({
	selector: 'speakers',
	templateUrl: 'speakers.component.html',
	styleUrls: ['speakers.component.scss']
})
export class SpeakersComponent {
	speakers$: Observable<Speaker[]> = this.speakersService.speakers$;
	loading$: Observable<boolean> = this.speakersService.loading$;

	constructor(
		private readonly speakersService: SpeakersService,
		private readonly browserService: BrowserService,
		private readonly modalController: ModalController
	) {}

	async openDetail(speaker: Speaker): Promise<void> {
		const modal = await this.modalController.create({
			component: SpeakerDetailComponent,
			componentProps: {
				speaker
			}
		});

		await modal.present();
	}

	openUrl(url: string): void {
		this.browserService.open(url);
	}
}
