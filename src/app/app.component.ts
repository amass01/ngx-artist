import { Component } from '@angular/core';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _artistName: string;

  constructor(private dataService: DataService) { }

  searchArtist() {
    this.dataService.getArtistInfoByName(this._artistName)
      .subscribe(
        (artistInfo) => console.log(artistInfo),
      );
  }

  get artistName(): string {
    return this._artistName;
  }

  set artistName(artistName) {
    this._artistName = artistName;
  }
}

