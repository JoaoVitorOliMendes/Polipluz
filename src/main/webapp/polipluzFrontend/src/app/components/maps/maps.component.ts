import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  
  lat = -19.920626070324953;
  lng = -43.93680607636681;
  
  constructor() { }

  ngOnInit(): void {
  }

}
