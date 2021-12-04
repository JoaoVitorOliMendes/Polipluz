import { Component, Input, OnInit } from '@angular/core';
import { Autoescola } from '../../models/autoescola.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input("autoescola") autoescola: any;
  @Input("removable") removable: any;

  constructor() { }

  ngOnInit(): void {
  }

}
