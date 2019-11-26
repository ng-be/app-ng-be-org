import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'speaker-social-row',
	templateUrl: 'speaker-social-row.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerSocialRowComponent {
	@Input() social: any;
	@Output() url: EventEmitter<string> = new EventEmitter<string>();

	onContact(type: 'twitter' | 'github' | 'website', event: Event): void {
		if (type === 'twitter') { // tslint:disable-line:prefer-switch
			this.url.emit(`https://twitter.com/${this.social.twitter}`);
		} else if (type === 'github') {
			this.url.emit(`https://github.com/${this.social.github}`);
		} else if (type === 'website') {
			this.url.emit(this.social.website);
		}

		event.stopPropagation();
	}
}
