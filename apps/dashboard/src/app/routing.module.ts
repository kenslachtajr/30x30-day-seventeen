import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeciesComponent } from './species/species.component';
import { LoginComponent } from '@species/ui-login';
import { WildComponent } from './wild/wild.component';
import { SpeciesItemComponent } from './species/species-item/species-item.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'species/:id', component: SpeciesItemComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
