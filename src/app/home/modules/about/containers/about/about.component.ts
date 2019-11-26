import {Component} from '@angular/core';
import {PopoverController} from '@ionic/angular';

import {BrowserService} from '@ngbe/services';

import {AboutMenuComponent} from '../../components/menu/about-menu.component';

@Component({
	selector: 'about',
	templateUrl: 'about.component.html',
	styleUrls: ['about.component.scss']
})
export class AboutComponent {
	constructor(
		private popoverCtrl: PopoverController,
		private browserService: BrowserService
	) {}

	async showMenu(event: Event) {
		const popover = await this.popoverCtrl.create({
			component: AboutMenuComponent,
			event
		});

		await popover.present();

		const {data} = await popover.onWillDismiss();

		if (data) {
			this.browserService.open(data);
		}
	}
}
