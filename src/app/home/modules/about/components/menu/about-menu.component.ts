import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
	selector: 'ngbe-about-menu',
	templateUrl: 'about-menu.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: ['.last-item > .item-native { border-bottom: 0px !important;}']
})
export class AboutMenuComponent {
	constructor(private popoverCtrl: PopoverController) {}

	open(url: string) {
		this.popoverCtrl.dismiss(url);
	}
}
