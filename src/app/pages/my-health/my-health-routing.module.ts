import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyHealthPage } from './my-health.page';

const routes: Routes = [
  {
    path: '',
    component: MyHealthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyHealthPageRoutingModule {}
