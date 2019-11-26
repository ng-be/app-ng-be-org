import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {ServiceWorkerModule} from '@angular/service-worker';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {RootRoutingModule} from './root-routing.module';
import {RootComponent} from './root.component';

import {environment} from 'src/environments/environment';

@NgModule({
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AngularFireModule.initializeApp(environment.firebase),
		ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
		AngularFirestoreModule,
		RootRoutingModule
	],
	declarations: [
		RootComponent
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
	],
	bootstrap: [
		RootComponent
	],
	entryComponents: []
})
export class RootModule {}
