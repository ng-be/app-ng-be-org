import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {PipesModule} from '@ngbe/pipes';

// Containers
import {SpeakersComponent} from './containers/speakers/speakers.component';
import {SpeakerDetailComponent} from './containers/speaker-detail/speaker-detail.component';

// Components
import {SpeakerListComponent} from './components/speaker-list/speaker-list.component';
import {SpeakerInfoComponent} from './components/speaker-info/speaker-info.component';
import {SpeakerSocialRowComponent} from './components/speaker-social-row/speaker-social-row.component';

import {SpeakersRoutingModule} from './speakers-routing.module';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		SpeakersRoutingModule,
		AngularFirestoreModule,
		PipesModule
	],
	declarations: [
		SpeakersComponent,
		SpeakerDetailComponent,
		SpeakerListComponent,
		SpeakerInfoComponent,
		SpeakerSocialRowComponent
	],
	entryComponents: [
		SpeakerDetailComponent
	]
})
export class SpeakersModule {}
