import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tulokset',
  templateUrl: './tulokset.component.html',
  styleUrls: ['./tulokset.component.css']
})


export class TuloksetComponent implements OnInit {
  @Input() supersankari;

  constructor() { }

  ngOnInit() {
  }

}
