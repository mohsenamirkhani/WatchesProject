import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchListComponent } from './watches/watch-list/watch-list.component';

const routes: Routes = [
  { path: '', component: WatchListComponent },
  { path: 'watches', loadChildren: './watches/watch-list/watch-list.module#WatchListModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
