import {Component, Input} from '@angular/core';
import {ModalController} from '@ionic/angular';

import {ScheduleItem} from '../../entities';

@Component({
	selector: 'schedule-detail',
	templateUrl: 'schedule-detail.component.html',
	styleUrls: ['schedule-detail.component.scss']
})
export class ScheduleDetailComponent {
	@Input() item: ScheduleItem;

	constructor(
		private readonly modalController: ModalController
	) {}

	async close(): Promise<void> {
		await this.modalController.dismiss();
	}
}
