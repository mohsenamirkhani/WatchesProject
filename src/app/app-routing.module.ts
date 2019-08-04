import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchListComponent } from './watches/watch-list/watch-list.component';
import { WatchDetailsComponent } from './watches/watch-list/watch-details/watch-details.component';

const routes: Routes = [
  { path: '', component: WatchListComponent },
  { path: 'watches/:id', component: WatchDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
