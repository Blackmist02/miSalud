import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyHealthPageRoutingModule } from './my-health-routing.module';

import { MyHealthPage } from './my-health.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyHealthPageRoutingModule
  ],
  declarations: [MyHealthPage]
})
export class MyHealthPageModule {}
