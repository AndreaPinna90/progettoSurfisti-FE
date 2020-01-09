import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {CommonModule} from '@angular/common';
import {FeatureBeachesRoutingModule} from './beaches.routing';
import {BeachesListComponent} from './list/beaches-list.component';
import {BeachEditComponent} from './edit/beach-edit.component';
import {BeachDetailComponent} from './detail/beach-detail.component';
import {BeachCreateComponent} from './create/beach-create.component';
import {BeachService} from '../../shared/services/beaches.service';
import {CoreModule} from '../../core/core.module';
import {WeatherService} from '../../shared/services/weather.service';
import {TrafficService} from '../../shared/services/traffic.service';
import {SortService} from '../../shared/services/sort.service';
import { from } from 'rxjs';
import { BeachSurfComponent } from './surf/beach-surf.component';
import { NewsComponent } from './news/news.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    BeachesListComponent,
    BeachEditComponent,
    BeachDetailComponent,
    BeachCreateComponent,
    BeachSurfComponent,
    NewsComponent,
    GalleryComponent
  ],
  imports: [
    CoreModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FeatureBeachesRoutingModule
  ],
  providers: [
    SortService,
    BeachService,
    WeatherService,
    TrafficService
  ],
})
export class FeatureBeachesModule {
}
