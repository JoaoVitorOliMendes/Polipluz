import { Component, OnInit } from '@angular/core';
import { Autoescola } from '../../models/autoescola.model';
import { AutoescolaService } from '../../services/autoescolaService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arrayAutoescolas: Autoescola[] = []

  constructor(
    private autoescolaService: AutoescolaService
  ) { }

  ngOnInit(): void {
    this.search()
  }

  search() {
    this.autoescolaService.getAll().subscribe((res) => {
      if(res.body) {
        this.arrayAutoescolas = res.body
        console.log(this.arrayAutoescolas);
      }
    })
  }
}
