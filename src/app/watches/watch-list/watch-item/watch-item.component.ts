import { Component, OnInit, Input } from '@angular/core';
import { WatchesModel } from '../../watches.model';

@Component({
  selector: 'app-watch-item',
  templateUrl: './watch-item.component.html',
  styleUrls: ['./watch-item.component.css']
})
export class WatchItemComponent implements OnInit {

  @Input() watch: WatchesModel;
  constructor() { }

  ngOnInit() {
    console.log(this.watch);
  }

}
