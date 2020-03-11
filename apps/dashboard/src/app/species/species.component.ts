import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Specie, NotifyService, emptySpecie } from '@ngrx-species/core-data';
import { SpeciesFacade } from '@ngrx-species/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngrx-species-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  form: FormGroup;
  selectedSpecie$: Observable<Specie> = this.speciesFacade.selectedSpecie$;
  species$: Observable<Specie[]> = this.speciesFacade.allSpecies$;

  constructor(
    private speciesFacade: SpeciesFacade,
    private formBuilder: FormBuilder,
    private notify: NotifyService
  ) {}

  ngOnInit() {
    this.initForm();
    this.speciesFacade.loadSpecies();
    this.speciesFacade.mutations$.subscribe(() => this.resetSpecie());
  }

  resetSpecie() {
    this.form.reset();
    this.selectSpecie(emptySpecie);
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key).setErrors(null);
    });
  }

  selectSpecie(specie: Specie) {
    this.speciesFacade.selectSpecie(specie.id);
    this.form.patchValue(specie);
  }

  createSpecie() {
    this.notify.notification(`You have created ${this.form.value.title}`);
    this.speciesFacade.createSpecie(this.form.value);
  }

  updateSpecie() {
    this.notify.notification(`You have updated ${this.form.value.title}`);
    this.speciesFacade.updateSpecie(this.form.value);
  }

  saveSpecie(specie: Specie) {
    if (specie.id) {
      this.updateSpecie();
    } else {
      this.createSpecie();
    }
  }

  deleteSpecie(specie: Specie) {
    this.notify.notification(`You have deleted ${specie.title}`);
    this.speciesFacade.deleteSpecie(specie);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      title: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])],
      intelligenceLevel: null,
      approved: null
    });
  }
}
