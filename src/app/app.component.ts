import { Component } from '@angular/core';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dataService: DataService) {
    dataService.getArtistInfoByName('Gal Gadot').subscribe(
      artistsInfo => console.log(artistsInfo),
    );
  }
}

