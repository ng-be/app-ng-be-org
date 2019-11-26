import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

import {Speaker} from '../../entities';

@Component({
	selector: 'speaker-list',
	templateUrl: 'speaker-list.component.html',
	styleUrls: ['speaker-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerListComponent {
	@Input() speakers: Speaker[];
	@Output() detail: EventEmitter<Speaker> = new EventEmitter<Speaker>();
	@Output() url: EventEmitter<string> = new EventEmitter<string>();

	trackByFunction(_: number, speaker: Speaker): string {
		return speaker.id;
	}
}
