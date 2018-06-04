import {Component, Input} from '@angular/core';
import {DataService} from './services/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  supersankari: string;

  onValmis($event) {
    this.supersankari = $event.supersankari;
    this.dataService.postSupersankari(
      $event.nimi,
      $event.supersankari
    ).then(function () {
      console.log("Tallennus onnistui");
    });
  }

  painallus() {
    this.title = this.title + '!';
  }

  constructor(private dataService: DataService) {
  }


}
