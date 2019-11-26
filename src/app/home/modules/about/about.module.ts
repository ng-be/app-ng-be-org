import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

// Containers
import {AboutComponent} from './containers/about/about.component';

// Components
import {AboutMenuComponent} from './components/menu/about-menu.component';

import {AboutRoutingModule} from './about-routing.module';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		AboutRoutingModule
	],
	declarations: [
		AboutComponent,
		AboutMenuComponent
	],
	entryComponents: [
		AboutMenuComponent
	]
})
export class AboutModule {}
