import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';

import { BrowserService } from '@ngbe/services';

import { ScheduleService } from '../../../schedule/services/schedule.service';

import { Speaker } from '../../entities';

import { ScheduleDetailComponent } from '../../../schedule/containers/schedule-detail/schedule-detail.component';

@Component({
	selector: 'speaker-detail',
	templateUrl: 'speaker-detail.component.html',
	styleUrls: ['speaker-detail.component.scss'],
})
export class SpeakerDetailComponent {
	@Input() speaker!: Speaker;
	@Input() showTalk: boolean = true;

	constructor(
		private readonly browserService: BrowserService,
		private readonly scheduleService: ScheduleService,
		private readonly modalController: ModalController
	) {}

	async close(): Promise<void> {
		await this.modalController.dismiss();
	}

	openUrl(url: string): void {
		this.browserService.open(url);
	}

	openTalk(id: string): void {
		this.scheduleService.itemById(id)
			.pipe(
				switchMap(async (talk) => {
					if (!talk) {
						return;
					}

					const modal = await this.modalController.create({
						component: ScheduleDetailComponent,
						componentProps: {
							item: talk,
							showSpeakers: false
						}
					});

					return modal.present();
				})
			)
			.subscribe();
	}
}
