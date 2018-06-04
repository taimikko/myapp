import {Component, Input, ViewChild} from '@angular/core';
import {DataService} from './services/data.service'
import { TuloksetComponent } from './tulokset/tulokset.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  @ViewChild(TuloksetComponent)tulokset: TuloksetComponent;
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

  onValinta($event) {
    this.sankariService.postSupersankari(
      $event.nimi,
      $event.sankari
    ).then(() => {
      this.supersankari = $event.supersankari;
      this.tulokset.paivitaTulokset();
    }).catch((err) => {
      console.log(err);
    });

}
