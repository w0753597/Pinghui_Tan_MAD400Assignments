import { Injectable } from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {MatSnackBar, MatSnackBarRef} from "@angular/material/snack-bar";
import {UpdateSnackBarComponent} from "../update-snack-bar/update-snack-bar.component";

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {
  snackBarRef?: MatSnackBarRef<any>;
  curVer?: string;
  newVer?: string;
  constructor(public updates: SwUpdate, private snackBar: MatSnackBar) { }

  public init() {
    this.updates.versionUpdates.subscribe(event => {
      switch (event.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version: ${event.version.hash}`);
          break;
        case 'VERSION_READY':
          this.curVer = event.currentVersion.hash;
          this.newVer = event.latestVersion.hash;
          console.log(`Current app version: ${this.curVer}`);
          console.log(`New app version ready for use: ${this.newVer}`);
          this.snackBarRef = this.snackBar.openFromComponent(UpdateSnackBarComponent);
          break;
      }
    });
  }

}
