import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModifyContentComponent} from "../modify-content/modify-content.component";

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent {
  id?: number;
constructor(public dialog: MatDialog) {
}
  openDialog(id?: number): void {

    const dialogRef = this.dialog.open(ModifyContentComponent, { height: '540px', width: '440px' });
    dialogRef.componentInstance.isDialog = true;
    dialogRef.componentInstance.id = id;

    /*
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
     */
  }
}
