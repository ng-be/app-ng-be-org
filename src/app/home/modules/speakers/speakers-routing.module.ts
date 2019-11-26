import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SpeakersComponent} from './containers/speakers/speakers.component';

const routes: Routes = [
	{path: '', component: SpeakersComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SpeakersRoutingModule {}
