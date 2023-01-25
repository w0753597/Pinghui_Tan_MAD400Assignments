import { isNgContent } from '@angular/compiler';
import { Component } from '@angular/core';
import { IContent } from './models/icontent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DIY a drone';
}
