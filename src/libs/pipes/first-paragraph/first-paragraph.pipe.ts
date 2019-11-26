import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'firstParagraph'
})
export class FirstParagraphPipe implements PipeTransform {
	transform(text: string): string {
		const index = text.indexOf('</p>');

		return text.slice(0, index + 4);
	}
}
