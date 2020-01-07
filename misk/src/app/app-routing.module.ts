import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ContactComponent } from './components/contact/contact.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { WrongRouteComponent } from './components/wrong-route/wrong-route.component';
import { SecurityComponent } from './components/security/security.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'story', component: ComingSoonComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'privacy', component: ComingSoonComponent },
  { path: 'terms', component: ComingSoonComponent },
  {
    path: '**',
    pathMatch: 'full',
    component: WrongRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
