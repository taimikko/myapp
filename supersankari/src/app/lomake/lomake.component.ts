import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-lomake',
  templateUrl: './lomake.component.html',
  styleUrls: ['./lomake.component.css']
})

export class LomakeComponent implements OnInit {
  nimi: string;
  supersankari: string;
  vaihtoehdot = [ "Superhessu", "Mustanaamio", "Teräsmies", "Batman" ];
  constructor() {
  }

  ngOnInit() {
  }

  @Output() valmis = new EventEmitter<any>();
  laheta() {
    this.valmis.emit({
      nimi: this.nimi,
      supersankari: this.supersankari
    });
    console.log("Lomakkeen tiedot pitäis lähettää johonkin");
    console.log("Nimi:", this.nimi);
  }
}

