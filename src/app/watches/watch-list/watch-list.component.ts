import { Component, OnInit } from '@angular/core';
import { WatchesService } from '../watches.service';
import { WatchesModel } from '../watches.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

  public filteredWatches = '';
  constructor(public watchesService: WatchesService, private router: Router) { }

  ngOnInit() {
    this.watchesService.getWatches().subscribe(
      (result) => {
        result.forEach(element => {
          this.watchesService.watches.push(element);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onWatchClick(id: string) {
    this.router.navigate(['watches', id]);
  }

}
