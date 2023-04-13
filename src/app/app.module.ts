import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListItemComponent } from './content-list-item/content-list-item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { UrlErrorComponent } from './url-error/url-error.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { FormsModule } from '@angular/forms';
import { FilterContentPipe } from './pipes/filter-content.pipe';
import { InteractiveHightlightDirective } from './directives/interactive-hightlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentListItemComponent,
    ItemDetailComponent,
    SearchComponent,
    UrlErrorComponent,
    TopNavBarComponent,
    ModifyContentComponent,
    FilterContentPipe,
    InteractiveHightlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      delay: 2000,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
