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
      this.asetaTulokset(response);
    });
  }

  labels;
  datasets;

  options = {
    maintainAspectRatio: false,
    scales: {yAxes: [{ticks: {beginAtZero: true}}]}
  };

  private asetaTulokset(tulokset) {
    console.log(tulokset);
    this.tuloslista = [];  // tyhjentää tuloslistan
    for (let t in tulokset) {
      this.tuloslista.push([t, tulokset[t]]);
    }

    let newLabels: string[] = [];
    let newData: number[] = [];
    // sortataaan aakkosjärjestykseen
    const nimet = Object.keys(tulokset).sort(function (a, b) {
      return tulokset[b] - tulokset[a];
    });

    // sortataan suosituimmuusjärjestykseen
    const arvot = Object.keys(tulokset).sort(function (a, b) {
      return tulokset[b] - tulokset[a];
    }).map(key => tulokset[key])

    for (let k in nimet) {
      newLabels.push(nimet[k]);
      newData.push(arvot[k]);
    }
    this.datasets = [
      {data: newData, label: "Suosikit"}
    ];
    this.labels = newLabels;

    console.log("tulokset:" , JSON.stringify(tulokset));
    console.log("newLabels:" , newLabels);
    console.log("newData:" , newData);

  }

}
