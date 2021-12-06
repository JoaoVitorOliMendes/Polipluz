import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Autoescola } from '../../models/autoescola.model';
import { AutoescolaService } from '../../services/autoescolaService';
import { AutoescolaModalComponent } from '../modals/autoescola-modal/autoescola-modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input("autoescola") autoescola: any;
  @Input("searchString") searchString: any;
  @Input("editable") editable: any;
  @Output("databaseUpdated") databaseUpdated = new EventEmitter<void>()

  constructor(
    private dialog: MatDialog,
    private autoescolaService: AutoescolaService,
  ) { }

  ngOnInit(): void {
  }

  edit() {
    const dialogRef = this.dialog.open(AutoescolaModalComponent, {
      width: '40rem',
      data: {
        autoescola: this.autoescola
      },
      panelClass: 'autoescolaModal'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.databaseUpdated.emit()
    });
  }

  remove() {
    this.autoescolaService.delete(this.autoescola.id).subscribe(() => {
      this.databaseUpdated.emit()
    })
  }

}
