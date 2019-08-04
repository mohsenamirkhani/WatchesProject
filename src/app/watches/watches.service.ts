import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WatchesModel } from './watches.model';

@Injectable({
  providedIn: 'root'
})
export class WatchesService {

  constructor(private http: HttpClient) { }

  watches: WatchesModel[] = [];

  baseApi = 'https://api.vyrent.com/watch-service/watches';

  getWatches() {
    return this.http.get<any>(this.baseApi);
  }
}
