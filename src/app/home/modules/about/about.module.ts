import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Containers
import { AboutComponent } from './containers/about/about.component';

// Components
import { AboutMenuComponent } from './components/menu/about-menu.component';

import { AboutRoutingModule } from './about-routing.module';

@NgModule({
	imports: [IonicModule, CommonModule, AboutRoutingModule],
	declarations: [AboutComponent, AboutMenuComponent],
})
export class AboutModule {}
