import { Component } from '@angular/core';
import { IContent } from '../models/icontent';
import { DronePartService } from '../services/drone-part.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  part?: IContent 

  constructor(private dronePartService: DronePartService) { }

  ngOnInit() {
    this.dronePartService.getDronePart(2).subscribe(p => this.part = p);
  }

  showPart(id: string) {
    let value = (document.getElementById(id) as HTMLInputElement).value
    this.dronePartService.getDronePart(+value).subscribe(p => this.part = p);
  }

}
