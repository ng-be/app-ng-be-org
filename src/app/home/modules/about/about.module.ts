import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Containers
import { AboutComponent } from './containers/about/about.component';

// Modules
import { MoreInfoModule } from '../more-info/more-info.module';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
	imports: [IonicModule, CommonModule, AboutRoutingModule, MoreInfoModule],
	declarations: [AboutComponent],
})
export class AboutModule {}
