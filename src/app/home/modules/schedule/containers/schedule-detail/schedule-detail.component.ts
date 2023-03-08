import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';

import { ScheduleItem } from '../../entities';
import { ScheduleService } from '../../services/schedule.service';

import { SpeakerDetailComponent } from '../../../speakers/containers/speaker-detail/speaker-detail.component';

@Component({
	selector: 'schedule-detail',
	templateUrl: 'schedule-detail.component.html',
	styleUrls: ['schedule-detail.component.scss'],
})
export class ScheduleDetailComponent {
	@Input() item!: ScheduleItem;

	constructor(
		private readonly modalController: ModalController,
		private readonly scheduleService: ScheduleService
	) {}

	async close(): Promise<void> {
		await this.modalController.dismiss();
	}


	async onSpeakerSelect(id: string) {
		this.scheduleService.speakerById(id)
			.pipe(
				switchMap(async (speaker) => {
					if (!speaker) {
						return;
					}

					const modal = await this.modalController.create({
						component: SpeakerDetailComponent,
						componentProps: {
							speaker
						}
					});

					return modal.present();
				})
			)
			.subscribe();
	}
}
