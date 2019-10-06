import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UltimospostsPage } from './ultimosposts.page';

const routes: Routes = [
  {
    path: '',
    component: UltimospostsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UltimospostsPage]
})
export class UltimospostsPageModule {}
