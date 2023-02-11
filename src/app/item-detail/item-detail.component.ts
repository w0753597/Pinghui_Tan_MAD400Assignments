import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContent } from '../models/icontent';
import { DronePartService } from '../services/drone-part.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  dronePart?: IContent;

  constructor(
    private router: Router,
    private dronePartService: DronePartService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id: number = 0;
      id = +(params.get('id') ?? -1);

      this.dronePartService.getDronePart(id).subscribe((dronePart: IContent) => {
        if (dronePart) {
          this.dronePart = dronePart;
        }
        else {
//          this.router.navigate(["/contentNotFoundHere"]);
        }
      });

    });
  }

}
