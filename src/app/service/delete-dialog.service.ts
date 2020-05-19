import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material';
import { MatConfirmDialogComponent } from '../utilities/mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DeleteDialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog() {
    return this.dialog.open(MatConfirmDialogComponent, {
      width: '300px',
      panelClass: 'confirm-dialog-container',
      position: { top: '10px' },
      disableClose: true
    });
  }

}
