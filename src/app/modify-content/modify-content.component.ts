import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IContent } from '../models/icontent';
import { DronePartService } from '../services/drone-part.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {
  added = false;
  updated = false;
  tags = "";
  newPart: IContent = {
    name: "",
    description: "",
    author: "NA",
    imgSrc: "",
    type: "",
  };

  constructor(private router: Router,
              private service: DronePartService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id: number = 0;
      id = +(params.get('id') ?? -1);

      this.service.getDronePart(id).subscribe((dronePart: IContent) => {
        if (dronePart.id && dronePart.id > 0) {
          this.newPart = dronePart;
          this.tags = this.newPart.tags?.join(", ") ?? "";
        }
        else {
          this.router.navigate(["/PageNotFound"]);
        }
      });

    });

  }

  addPartToServer(): void {
    this.newPart.tags = this.tags.split(/,\s*/);
    this.added = false;
    this.service.addDronePart(this.newPart)
      .subscribe( notused => { 
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
    this.newPart.tags = this.tags.split(/,\s*/);
    this.updated = false;
    this.service.updateDronePart(this.newPart)
      .subscribe( notused => { this.updated = true; });
  }
}
