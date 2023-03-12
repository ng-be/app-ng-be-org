import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
	selector: 'ngbe-more-info-menu',
	templateUrl: 'more-info.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoreInfoComponent {
	constructor(private popoverCtrl: PopoverController) {}

	open(url: string) {
		this.popoverCtrl.dismiss(url);
	}
}
