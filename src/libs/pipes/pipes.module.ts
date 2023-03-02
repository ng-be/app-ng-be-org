import { NgModule } from '@angular/core';

import { FirstParagraphPipe } from './first-paragraph/first-paragraph.pipe';
import { TimePipe } from './time/time.pipe';

@NgModule({
	declarations: [FirstParagraphPipe, TimePipe],
	exports: [FirstParagraphPipe, TimePipe],
})
export class PipesModule {}
