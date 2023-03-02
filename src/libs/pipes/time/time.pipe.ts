import { Pipe, PipeTransform } from '@angular/core';

const FORMAT = new Intl.DateTimeFormat('en', {
	hour: 'numeric',
	minute: 'numeric',
	hourCycle: 'h23',
});

@Pipe({
	name: 'time',
})
export class TimePipe implements PipeTransform {
	transform(date: string): string {
		return FORMAT.format(new Date(date));
	}
}
