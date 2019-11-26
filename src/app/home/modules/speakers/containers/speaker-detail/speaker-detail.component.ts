import {Component, Input} from '@angular/core';

import {BrowserService} from '@ngbe/services';

import {Speaker} from '../../entities';
import {ModalController} from '@ionic/angular';

@Component({
	selector: 'speaker-detail',
	templateUrl: 'speaker-detail.component.html',
	styleUrls: ['speaker-detail.component.scss']
})
export class SpeakerDetailComponent {
	@Input() speaker: Speaker;

	constructor(
		private readonly browserService: BrowserService,
		private readonly modalController: ModalController
	) {}

	async close(): Promise<void> {
		await this.modalController.dismiss();
	}

	openUrl(url: string): void {
		this.browserService.open(url);
	}
}
