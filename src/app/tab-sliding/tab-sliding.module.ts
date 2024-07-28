import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabSlidingPageRoutingModule } from './tab-sliding-routing.module';

import { TabSlidingPage } from './tab-sliding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSlidingPageRoutingModule
  ],
  declarations: [TabSlidingPage]
})
export class TabSlidingPageModule {}
