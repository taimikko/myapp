import {Component, Input, ViewChild} from '@angular/core';
import {DataService} from './services/data.service'
import {TuloksetComponent} from './tulokset/tulokset.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  @ViewChild(TuloksetComponent) tulokset: TuloksetComponent;
  supersankari: string;

  onValmis($event) {
    this.supersankari = $event.supersankari;
    this.dataService.postSupersankari(
      $event.nimi,
      $event.supersankari
    ).then(() => {
      console.log("Tallennus onnistui");
      this.tulokset.paivitaTulokset(); //päivitä tulokset
    });
  }

  painallus() {
    this.title = this.title + '!';
  }

  constructor(private dataService: DataService) {
  }

  onValinta($event) {
    this.dataService.postSupersankari(
      $event.nimi,
      $event.sankari
    ).then(() => {
      // nuolisyntaksin kanssa this viittaa oikeaan paikkaan, käytä sitä!
      this.supersankari = $event.supersankari;
      this.tulokset.paivitaTulokset();
    }).catch((err) => {
      console.log(err);
    });
  }
}
