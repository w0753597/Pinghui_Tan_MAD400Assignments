import { isNgContent } from '@angular/compiler';
import { Component } from '@angular/core';
import { ContentList } from './models/content-list';
import { IContent } from './models/icontent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DIY a drone';
  list = this.buildSampleList();

  private buildSampleList(): ContentList {
    let list = new ContentList();

    let content: IContent = {
      id: 1, 
      name: "On Everything",
      author: "Weed John",
      type: "Religion"
    };    
    list.addContent(content);

    content = {
      id: 2, 
      name: "When Sam Meet Eva",
      author: "Doe Indie",
      type: "Romance"
    };    
    list.addContent(content);

    content = {
      id: 3, 
      name: "What You Think Is Not What You Get",
      author: "Rasha Willimson",
      type: "Philosophy"
    };    
    list.addContent(content);

    content = {
      id: 4, 
      name: "Nonexistence",
      author: "Xenello Zewa",
      type: "Religion"
    };    
    list.addContent(content);
    
    return list;
  }
}
