import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

import { ScheduleItem } from '../../entities';

@Component({
	selector: 'schedule-item-detail',
	templateUrl: 'schedule-item-detail.component.html',
	styleUrls: ['schedule-item-detail.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleItemDetailComponent {
	@Input() item!: ScheduleItem;
	@Output() speaker: EventEmitter<string> = new EventEmitter<string>();

	onSpeakerSelect(id: string): void {
		this.speaker.emit(id);
	}
}
