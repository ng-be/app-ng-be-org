import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

import { Speaker } from '../../entities';

@Component({
	selector: 'speaker-info',
	templateUrl: 'speaker-info.component.html',
	styleUrls: ['speaker-info.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeakerInfoComponent {
	@Input() speaker!: Speaker;
	@Input() showTalk: boolean = true;
	@Output() url: EventEmitter<string> = new EventEmitter<string>();
	@Output() talk: EventEmitter<string> = new EventEmitter<string>();

	onTalkSelect(id: string) {
		this.talk.emit(id);
	}
}
