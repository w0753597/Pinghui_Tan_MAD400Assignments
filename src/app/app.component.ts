import { isNgContent } from '@angular/compiler';
import {ApplicationRef, Component, OnInit} from '@angular/core';
import { IContent } from './models/icontent';
import { DronePartService } from './services/drone-part.service';
import {LogUpdateService} from "./services/log-update.service";
import {SwUpdate} from "@angular/service-worker";
import {concat, first, interval} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //title = 'DIY a drone';
  constructor(private logService: LogUpdateService,
              private appRef: ApplicationRef,
              private updates: SwUpdate) {}

  ngOnInit() {
    this.logService.init();
    let isStable = this.appRef.isStable.pipe(first(stable => stable));
    let hourly = interval(30 * 1000);
    concat(isStable, hourly).subscribe(() => {
        console.log("checking for update");
        this.updates.checkForUpdate();
      }
    )
  }
}
