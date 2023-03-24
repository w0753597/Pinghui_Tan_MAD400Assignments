import { Component } from '@angular/core';
import { IContent } from '../models/icontent';
import { DronePartService } from '../services/drone-part.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  added = false;
  updated = false;
  tags = ""
  newPart: IContent = {
    name: "",
    description: "",
    author: "NA",
    imgSrc: "",
    type: "",
  };

  constructor(private service: DronePartService) {}

  addPartToServer(): void {
    this.newPart.tags = this.tags.split(/[, ]+/);
    this.added = false;
    this.service.addDronePart(this.newPart)
      .subscribe( notused => { 
        console.log(notused);
        this.added = true;
        this.newPart = {
          name: "",
          description: "",
          author: "NA",
          imgSrc: "",
          type: "",
        };
        this.tags = "";
      });
  }

  updatePartInServer(): void {
    
  }
}
