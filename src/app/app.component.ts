import { Component } from '@angular/core';
import { DataService } from '../common/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _artistName: string;
  private _artistInfo: any;
  private _artistEvents: any;
  displayedColumns = ['venue', 'city', 'country', 'date'];

  constructor(private dataService: DataService,
              private router: Router
  ) { }

  searchArtist() {
    this.dataService.getArtistInfoByName(this._artistName)
      .subscribe(
        artistInfo => this._artistInfo = artistInfo,
        error => console.log(JSON.stringify(error, null, 2))
      );
    this.dataService.getArtistEventsByName(this._artistName)
      .subscribe(
        artistEvents => this._artistEvents = artistEvents,
        error => console.log(JSON.stringify(error, null, 2))
      );
  }

  navigateToFacebook() {
    window.open(this._artistInfo.facebook_page_url, '_blank');
  }

  get artistName(): string {
    return this._artistName;
  }

  set artistName(artistName) {
    this._artistName = artistName;
  }

  get artistInfo(): any {
    return this._artistInfo;
  }

  get artistEvents(): any {
    return this._artistEvents;
  }
}

