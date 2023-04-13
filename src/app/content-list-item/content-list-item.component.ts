import { Component, Input } from '@angular/core';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-content-list-item',
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.scss']
})
export class ContentListItemComponent {
  @Input() content?: IContent;

  onClickImg() {
    console.log("id: " + this.content?.id);
    console.log("description: " + this.content?.description);
  }

  colorstyle(): string {
    let n = this.hashCodeColor("random" + this.content?.type);
    let style = "background-color: #" + n.toString(16)
                 + "; color: #" + this.inverseBW(n).toString(16) + ";";
    //console.log("colorstyle = " + style);
    return style;
  }

  // this function is used to generate random background color
  private hashCodeColor(str: string): number {
    let n: number = 0;
    for (let i = 0; i < str.length; i++) {
      n = 31 * n + str.charCodeAt(i);
    }
    return n & 0xffffff;
  }


  private toHexColor(n: number) {
    return (n & 0xffffff).toString(16);
  }

  private R(c: number): number {
    return (c >> 16) & 0xff;
  }

  private G(c: number): number {
    return (c >> 8) & 0xff;
  }

  private B(c: number): number {
    return c & 0xff;
  }

  private luminance(c: number): number {
    return 0.2126 * this.R(c) + 0.7152 * this.G(c) + 0.0722 * this.B(c);
  }

  // this function is for calculating text color
  // keep text color black or white for readability
  private inverseBW(c: number): number {
    let lum = this.luminance(c);
    return (lum < 140) ? 0xffffff : 0;
  }
}
