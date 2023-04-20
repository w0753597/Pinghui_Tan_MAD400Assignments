import {Component, Injector, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {IContent} from '../models/icontent';
import {DronePartService} from '../services/drone-part.service';
import {MatDialogRef} from "@angular/material/dialog";

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
  id?: number;
  isDialog: boolean = false;
  dialogRef?: MatDialogRef<ModifyContentComponent>;

  constructor(private router: Router,
              private service: DronePartService,
              private route: ActivatedRoute,
              private injector: Injector) {}

  ngOnInit(): void {
    console.log("this.route.paraMap = " + this.route.paramMap);
    console.log("this.partId = " + this.id);
    console.log("this.isDialog = " + this.isDialog);
    console.log("this.router.url = " + this.router.url);
    if (this.isDialog) {

      if (this.id != null) {
        this.getDronePart(this.id);
      }
      this.dialogRef = <MatDialogRef<ModifyContentComponent>>(this.injector.get(MatDialogRef));

    } else {

      this.route.paramMap.subscribe(params => {
        let id: number = 0;
        id = +(params.get('id') ?? -1);
        if (id != -1)
          this.getDronePart(id);
      });

    }
  }

  closeDialog(): void {
    if (this.dialogRef)
      this.dialogRef.close();
  }

  redirectTo(url: string) {
    this.router.navigateByUrl('/addContent', {skipLocationChange: true}).then(
      () => this.router.navigate([url])
    );
  }

  getDronePart(id: number): void {
    this.service.getDronePart(id).subscribe((dronePart: IContent) => {
      if (dronePart && dronePart.id && dronePart.id > 0) {
        this.newPart = dronePart;
        this.tags = this.newPart.tags?.join(", ") ?? "";
      } else {
        console.log(`genDronePart: No part with id = ${id}`);
        this.router.navigate(["/addContent"]);
      }
    });
  }

  addPartToServer(): void {
    this.newPart.tags = this.tags.split(/,\s*/);
    this.added = false;
    this.service.addDronePart(this.newPart)
      .subscribe(() => {
        if (this.dialogRef) {
          this.dialogRef.close();
          this.redirectTo(this.router.url);
        } else {
          this.added = true;
          this.newPart = {
            name: "",
            description: "",
            author: "NA",
            imgSrc: "",
            type: "",
          };
          this.tags = "";
        }
      });
  }

  updatePartInServer(): void {
    this.newPart.tags = this.tags.split(/,\s*/);
    this.updated = false;
    this.service.updateDronePart(this.newPart)
      .subscribe(() => {
        if (this.dialogRef) {
          this.dialogRef.close();
          this.redirectTo(this.router.url);
        } else {
          this.updated = true;
        }
      });
  }
}
