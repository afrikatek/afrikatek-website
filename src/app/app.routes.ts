import {Routes} from '@angular/router';
import {HomeComponent} from './main/home/home.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {ServicesComponent} from './services/services.component';
import {ListComponent} from './blog/list/list.component';
import {DetailComponent as BlogDetailComponent} from './blog/detail/detail.component';
import {DetailComponent as ProjectDetailComponent} from './projects/detail/detail.component';
import {DetailComponent as ServiceDetailComponent} from './services/detail/detail.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'products', component: ProjectsComponent},
  {path: 'products/:id', component: ProjectDetailComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'services/:id', component: ServiceDetailComponent},
  {path: 'blog', component: ListComponent},
  {path: 'blog/:id', component: BlogDetailComponent}
];
