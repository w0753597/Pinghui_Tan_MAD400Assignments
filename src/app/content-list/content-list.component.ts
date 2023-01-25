import { Component, ɵisListLikeIterable } from '@angular/core';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentList: IContent[] = [
    { id: 1, name: "On Everything", author: "Weed John", type: "Religon" },
    { id: 2, name: "When Sam Meet Eva", author: "Doe Indie", type: "Romance" },
    { id: 3, name: "What You Think Is Not What You Get", author: "Rasha Willimson", type: "Philosophy" },
    { id: 4, name: "Nonexistence", author: "Xenello Zewa", type: "Religion" }
  ];
}
