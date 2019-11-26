import {NgModule} from '@angular/core';

import {FirstParagraphPipe} from './first-paragraph/first-paragraph.pipe';
import {MomentPipe} from './moment/moment.pipe';

@NgModule({
	declarations: [
		FirstParagraphPipe,
		MomentPipe
	],
	exports: [
		FirstParagraphPipe,
		MomentPipe
	]
})
export class PipesModule {}
