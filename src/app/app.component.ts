import { isNgContent } from '@angular/compiler';
import { Component } from '@angular/core';
import { IContent } from './models/icontent';
import { DronePartService } from './services/drone-part.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DIY a drone';
  part?: IContent 

  constructor(private dronePartService: DronePartService) { }

  ngOnInit() {
    this.dronePartService.getDronePart(2).subscribe(p => this.part = p);
  }

}
