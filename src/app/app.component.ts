import { Component } from '@angular/core';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _artistName: string;
  private _artistInfo: object;

  constructor(private dataService: DataService) { }

  searchArtist() {
    this.dataService.getArtistInfoByName(this._artistName)
      .subscribe(
        artistInfo => this._artistInfo = artistInfo,
      );
  }

  get artistName(): string {
    return this._artistName;
  }

  set artistName(artistName) {
    this._artistName = artistName;
  }

  get artistInfo(): object {
    return this._artistInfo;
  }
}

