import { Component, OnInit } from '@angular/core';
import { Autoescola } from '../../models/autoescola.model';
import { AutoescolaService } from '../../services/autoescolaService';
import { MatDialog } from '@angular/material/dialog';
import { AutoescolaModalComponent } from '../modals/autoescola-modal/autoescola-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arrayAutoescolas: Autoescola[] = []

  constructor(
    private autoescolaService: AutoescolaService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.search()
  }

  search() {
    this.autoescolaService.getAll().subscribe((res) => {
      if(res.body) {
        this.arrayAutoescolas = res.body
      }
    })
  }

  addAutoescola() {
    const dialogRef = this.dialog.open(AutoescolaModalComponent, {
      width: '40rem',
      panelClass: 'autoescolaModal'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.search();
    });
  }
}

