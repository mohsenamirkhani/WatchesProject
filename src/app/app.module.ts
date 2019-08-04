import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchListComponent } from './watches/watch-list/watch-list.component';
import { HttpClientModule } from '@angular/common/http';
import { WatchItemComponent } from './watches/watch-list/watch-item/watch-item.component';
import { FormsModule } from '@angular/forms';
import { WatchesPipe } from './watches/watches.pipe';
import { WatchDetailsComponent } from './watches/watch-list/watch-details/watch-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WatchListComponent,
    WatchItemComponent,
    WatchesPipe,
    WatchDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
