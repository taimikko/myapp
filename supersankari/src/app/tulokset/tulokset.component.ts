import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../services/data.service'

@Component({
  selector: 'app-tulokset',
  templateUrl: './tulokset.component.html',
  styleUrls: ['./tulokset.component.css']
})


export class TuloksetComponent implements OnInit {
  @Input() supersankari;

  tuloslista: any[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.paivitaTulokset();
  }

  public paivitaTulokset() {
    this.dataService.haeTulokset().then((response) => {
      this.asetaTulokset(response.json());
    });
  }

  private asetaTulokset(tulokset) {
    this.tuloslista = [];  // tyhjentää tuloslistan
    for (let t in tulokset) {
      this.tuloslista.push([t, tulokset[t]]);
    }

  }
