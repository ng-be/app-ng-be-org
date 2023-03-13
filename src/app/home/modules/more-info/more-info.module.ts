import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { MoreInfoComponent } from './components/more-info.component';


@NgModule({
	imports: [IonicModule, CommonModule],
	declarations: [MoreInfoComponent],
	exports: [MoreInfoComponent]
})
export class MoreInfoModule {}
