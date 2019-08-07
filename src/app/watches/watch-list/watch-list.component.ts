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
  public sizeOfElements = 0;
  constructor(public watchesService: WatchesService, private router: Router) { }

  ngOnInit() {
    this.watchesService.getWatches().subscribe(
      (result) => {
        result.forEach(element => {
          this.watchesService.watches.push(element);
        });
        const parent = document.getElementById('parent');
        parent.style.height = ((result.length / 4) * 515).toString() + 'px';
        console.log((result.length / 4) * 600);
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
