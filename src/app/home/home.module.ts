import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {HomeRoutingModule} from './home-routing.module';

import {HomeComponent} from './containers/home.component';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		HomeRoutingModule
	],
	declarations: [
		HomeComponent
	]
})
export class HomeModule {}
