import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchListRoutingModule } from './watch-list-routing.module';
import { WatchDetailsComponent } from './watch-details/watch-details.component';

@NgModule({
  declarations: [
    WatchDetailsComponent
  ],
  imports: [
    CommonModule,
    WatchListRoutingModule
  ]
})
export class WatchListModule { }
