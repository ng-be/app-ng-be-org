import {Component, ChangeDetectionStrategy} from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
	selector: 'about-menu',
	templateUrl: 'about-menu.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMenuComponent {
	constructor(
		private popoverCtrl: PopoverController
	) {}

	open(url: string) {
		this.popoverCtrl.dismiss(url);
	}
}
