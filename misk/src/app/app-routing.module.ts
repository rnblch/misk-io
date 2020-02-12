import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { ContactComponent } from './components/contact/contact.component';
import { LandingComponent } from './components/landing/landing.component';
import { MissionDetailsComponent } from './components/mission-details/mission-details.component';
import { MissionComponent } from './components/mission/mission.component';
import { SecurityComponent } from './components/security/security.component';
import { WrongRouteComponent } from './components/wrong-route/wrong-route.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'story', component: MissionComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'privacy', component: ComingSoonComponent },
  { path: 'terms', component: ComingSoonComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'how', component: MissionDetailsComponent },
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
