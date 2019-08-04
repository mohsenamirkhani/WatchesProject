import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WatchesService } from '../../watches.service';
import { WatchesModel } from '../../watches.model';

@Component({
  selector: 'app-watch-details',
  templateUrl: './watch-details.component.html',
  styleUrls: ['./watch-details.component.css']
})
export class WatchDetailsComponent implements OnInit {

  public watch: WatchesModel;
  constructor(private activeRoute: ActivatedRoute, private watchesService: WatchesService, private router: Router) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];
    this.watch = this.watchesService.watches.find(w => w.id === id);
    console.log(this.watch);
  }

  backToRoot() {
    this.router.navigate(['']);
  }
}
