import {Component, Input, ChangeDetectionStrategy, EventEmitter, Output} from '@angular/core';

import {ScheduleItem} from '../../entities';

@Component({
	selector: 'schedule-item',
	templateUrl: 'schedule-item.component.html',
	styleUrls: ['schedule-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleItemComponent {
	@Input() item: ScheduleItem;
	@Output() detail: EventEmitter<ScheduleItem> = new EventEmitter<ScheduleItem>();

	get faded(): boolean {
		const now = new Date();
		const endDate = new Date(this.item.endDate);

		return now.getTime() > endDate.getTime();
	}

	onSelect(): void {
		this.detail.emit(this.item);
	}
}
