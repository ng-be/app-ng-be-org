import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Observable} from 'rxjs';

import {ScheduleService} from '../../services/schedule.service';
import {ScheduleItem} from '../../entities';
import {ScheduleDetailComponent} from '../schedule-detail/schedule-detail.component';

@Component({
	selector: 'schedule',
	templateUrl: 'schedule.component.html',
	styleUrls: ['schedule.component.scss']
})
export class ScheduleComponent {
	schedule$: Observable<ScheduleItem[]> = this.scheduleService.schedule$;
	loading$: Observable<boolean> = this.scheduleService.loading$;

	constructor(
		private readonly scheduleService: ScheduleService,
		private readonly modalController: ModalController
	) {}

	async showDetail(item: ScheduleItem): Promise<void> {
		const modal = await this.modalController.create({
			component: ScheduleDetailComponent,
			componentProps: {
				item
			}
		});

		await modal.present();
	}
}
