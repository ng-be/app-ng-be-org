import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { BrowserService } from '@ngbe/services';

import { MoreInfoComponent } from '../../../more-info/components/more-info.component';

@Component({
	selector: 'ngbe-about',
	templateUrl: 'about.component.html',
	styleUrls: ['about.component.scss'],
})
export class AboutComponent {
	constructor(
		private readonly popoverCtrl: PopoverController,
		private readonly browserService: BrowserService
	) {}

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
