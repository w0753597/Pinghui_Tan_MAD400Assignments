import {Component, OnInit} from '@angular/core';
import {LogUpdateService} from "../services/log-update.service";

@Component({
  selector: 'app-update-snack-bar',
  templateUrl: './update-snack-bar.component.html',
  styleUrls: ['./update-snack-bar.component.scss']
})
export class UpdateSnackBarComponent implements OnInit {

  message?: string
  constructor(private updateService: LogUpdateService) {
  }

  ngOnInit() {
    this.message = `Version ${this.updateService.newVer?.substring(0, 8)} is ready.`;
  }

  updateApp() {
    this.updateService.updates.activateUpdate().then(() => document.location.reload());
    this.updateService.snackBarRef?.dismiss();
  }
}
