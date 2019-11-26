import {Component, ChangeDetectionStrategy, Input, EventEmitter, Output} from '@angular/core';

import {Speaker} from '../../entities';

@Component({
	selector: 'speaker-info',
	templateUrl: 'speaker-info.component.html',
	styleUrls: ['speaker-info.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerInfoComponent {
	@Input() speaker: Speaker;
	@Output() url: EventEmitter<string> = new EventEmitter<string>();
}
