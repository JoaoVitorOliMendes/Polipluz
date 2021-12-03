import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Autoescola } from '../../models/autoescola.model';
import { AutoescolaService } from '../../services/autoescolaService';
import { AutoescolaModalComponent } from '../modals/autoescola-modal/autoescola-modal.component';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

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
        console.log(this.arrayAutoescolas);
      }
    })
  }

  stringToNumber(string: any) : number {
    return parseFloat(string)
  }

  presentModal(autoescola: Autoescola): void {
    const dialogRef = this.dialog.open(AutoescolaModalComponent, {
      width: '25rem',
      data: {
        autoescola: autoescola
      },
      panelClass: 'autoescolaModal'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.search();
    });
  }

}
