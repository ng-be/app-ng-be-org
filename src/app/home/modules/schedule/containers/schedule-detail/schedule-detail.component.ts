import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';

import { SpeakersService } from '../../../speakers/services/speakers.service';

import { ScheduleItem } from '../../entities';

import { SpeakerDetailComponent } from '../../../speakers/containers/speaker-detail/speaker-detail.component';

@Component({
	selector: 'schedule-detail',
	templateUrl: 'schedule-detail.component.html',
	styleUrls: ['schedule-detail.component.scss'],
})
export class ScheduleDetailComponent {
	@Input() item!: ScheduleItem;
	@Input() showSpeakers: boolean = true;

	constructor(
		private readonly modalController: ModalController,
		private readonly speakersService: SpeakersService
	) {}

	async close(): Promise<void> {
		await this.modalController.dismiss();
	}


	async onSpeakerSelect(id: string) {
		this.speakersService.itemById(id)
			.pipe(
				switchMap(async (speaker) => {
					if (!speaker) {
						return;
					}

					const modal = await this.modalController.create({
						component: SpeakerDetailComponent,
						componentProps: {
							speaker,
							showTalk: false
						}
					});

					return modal.present();
				})
			)
			.subscribe();
	}
}
