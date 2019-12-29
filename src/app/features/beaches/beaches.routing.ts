import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BeachesListComponent} from './list/beaches-list.component';
import {BeachDetailComponent} from './detail/beach-detail.component';
import {BeachCreateComponent} from './create/beach-create.component';
import {BeachEditComponent} from './edit/beach-edit.component';
import {BeachSurfComponent} from './surf/beach-surf.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: BeachesListComponent,
  },
  {
    path: 'details/:id',
    component: BeachDetailComponent,
  },
  {
    path: 'create',
    component: BeachCreateComponent,
  },
  {
    path: 'edit/:id',
    component: BeachEditComponent,
  },
  {
    path: 'surf',
    component: BeachSurfComponent,
  }
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class FeatureBeachesRoutingModule {
}
