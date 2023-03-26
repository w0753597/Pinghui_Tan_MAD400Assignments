import { Component } from '@angular/core';
import { IContent } from '../models/icontent';
import { DronePartService } from '../services/drone-part.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentList: IContent[] = [];

  constructor(private dronePartService: DronePartService) { }

  ngOnInit() {
    this.dronePartService.getDroneParts().subscribe(
      content => this.contentList = content
    );
  }
}
