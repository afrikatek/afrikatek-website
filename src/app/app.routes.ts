import {Routes} from '@angular/router';
import {HomeComponent} from './main/home/home.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {ServicesComponent} from './services/services.component';
import {ListComponent} from './blog/list/list.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'products', component: ProjectsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'blog', component: ListComponent}
];
