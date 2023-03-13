import { Component } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { ScheduleService } from '../../services/schedule.service';
import { ScheduleItem } from '../../entities';
import { ScheduleDetailComponent } from '../schedule-detail/schedule-detail.component';
import { MoreInfoComponent } from '../../../more-info/components/more-info.component';
import { BrowserService } from '@ngbe/services';

@Component({
	selector: 'schedule',
	templateUrl: 'schedule.component.html',
	styleUrls: ['schedule.component.scss'],
})
export class ScheduleComponent {
	schedule$: Observable<ScheduleItem[]> = this.scheduleService.schedule$;
	loading$: Observable<boolean> = this.scheduleService.loading$;

	constructor(
		private readonly scheduleService: ScheduleService,
		private readonly modalController: ModalController,
		private readonly browserService: BrowserService,
		private readonly popoverCtrl: PopoverController
	) {
	}

	async showDetail(item: ScheduleItem): Promise<void> {
		const modal = await this.modalController.create({
			component: ScheduleDetailComponent,
			componentProps: {
				item,
			},
		});

		await modal.present();
	}

	async showMenu(event: Event) {
		const popover = await this.popoverCtrl.create({
			component: MoreInfoComponent,
			event,
		});

		await popover.present();

		const { data } = await popover.onWillDismiss();

		if (data) {
			this.browserService.open(data);
		}
	}
}
