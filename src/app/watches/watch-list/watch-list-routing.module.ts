import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchDetailsComponent } from './watch-details/watch-details.component';

const routes: Routes = [{
  path: ':id', component: WatchDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchListRoutingModule { }
