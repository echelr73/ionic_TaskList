import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabSlidingPage } from './tab-sliding.page';

const routes: Routes = [
  {
    path: '',
    component: TabSlidingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSlidingPageRoutingModule {}
