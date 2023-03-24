import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { SearchComponent } from './search/search.component';
import { UrlErrorComponent } from './url-error/url-error.component';
import { ModifyContentComponent } from './modify-content/modify-content.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "content",
    pathMatch: "full",
  },
  {
    path: "content",
    component: ContentListComponent,
  },
  {
    path: "content/:id",
    component: ItemDetailComponent,
  },
  {
    path: "search",
    component: SearchComponent,
  },
  {
    path: "addContent",
    component: ModifyContentComponent,
  },
  {
    path: "editContent/:id",
    component: ModifyContentComponent,
  },
  {
    path: "**",
    component: UrlErrorComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
