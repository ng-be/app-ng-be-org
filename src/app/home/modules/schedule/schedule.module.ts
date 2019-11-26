import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';

import {PipesModule} from '@ngbe/pipes';

// Containers
import {ScheduleComponent} from './containers/schedule/schedule.component';
import {ScheduleDetailComponent} from './containers/schedule-detail/schedule-detail.component';

// Components
import {ScheduleItemComponent} from './components/schedule-item/schedule-item.component';
import {ScheduleItemDetailComponent} from './components/schedule-item-detail/schedule-item-detail.component';

import {ScheduleRoutingModule} from './schedule-routing.module';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		ScheduleRoutingModule,
		PipesModule
	],
	declarations: [
		ScheduleComponent,
		ScheduleDetailComponent,
		ScheduleItemComponent,
		ScheduleItemDetailComponent
	],
	entryComponents: [
		ScheduleDetailComponent
	]
})
export class ScheduleModule {}
