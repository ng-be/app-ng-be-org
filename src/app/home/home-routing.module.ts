import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './containers/home.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
		children: [
			{
				path: 'schedule',
				loadChildren: () => import('./modules/schedule/schedule.module').then((m) => m.ScheduleModule),
			},
			{
				path: 'speakers',
				loadChildren: () => import('./modules/speakers/speakers.module').then((m) => m.SpeakersModule),
			},
			{
				path: 'about',
				loadChildren: () => import('./modules/about/about.module').then((m) => m.AboutModule),
			},
			{
				path: '',
				redirectTo: '/tabs/tab1',
				pathMatch: 'full',
			},
		],
	},
	{
		path: '',
		redirectTo: '/home/schedule',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
})
export class HomeRoutingModule {}
