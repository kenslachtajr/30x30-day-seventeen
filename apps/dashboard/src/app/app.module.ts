import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreDataModule } from '@ngrx-species/core-data';
import { MaterialModule } from '@ngrx-species/material';
import { UiLoginModule } from '@ngrx-species/ui-login';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { SpeciesComponent } from './species/species.component';
import { SpeciesListComponent } from './species/species-list/species-list.component';
import { SpeciesDetailsComponent } from './species/species-details/species-details.component';
import { SpeciesItemComponent } from './species/species-item/species-item.component';
import { WildComponent } from './wild/wild.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeciesComponent,
    SpeciesListComponent,
    SpeciesDetailsComponent,
    SpeciesItemComponent,
    WildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreDataModule,
    MaterialModule,
    UiLoginModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
