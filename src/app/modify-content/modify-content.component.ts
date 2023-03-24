import { Component } from '@angular/core';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newPart: IContent = {
    name: "",
    description: "",
    author: "NA",
    imgSrc: "",
    type: "",
    tags: []
  }

  addPartToServer(): void {
  }
}
