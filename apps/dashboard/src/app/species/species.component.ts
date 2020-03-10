import { Component, OnInit } from '@angular/core';
import { Specie, SpeciesService, emptySpecie, NotifyService } from '@species/core-data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'species-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  specie$;
  selectedSpecie: Specie;
  form: FormGroup;

  constructor(
    private speciesService: SpeciesService,
    private formBuilder: FormBuilder,
    private notify: NotifyService
  ) { }

  resetSpecie() {
    this.form.reset();
    this.selectSpecie(emptySpecie);
  }

  ngOnInit() {
    this.getSpecies();
    this.initForm();
    this.resetSpecie();
  }

  selectSpecie(specie: Specie) {
    this.selectedSpecie = specie;
    this.form.patchValue(specie);
  }

  getSpecies() {
    this.specie$ = this.speciesService.all();
  }

  saveSpecie() {
    if(!this.form.value.id) {
      this.createSpecie();
    } else {
      this.updateSpecie();
    }
  }

  updateSpecie() {
    this.speciesService.update(this.form.value).subscribe(() => {
      this.getSpecies();
      this.resetSpecie();
    });
    this.notify.notification(`You have updated ${this.form.value.type}`);
  }

  createSpecie() {
    this.speciesService.create(this.form.value).subscribe(() => {
      this.getSpecies();
      this.resetSpecie();
    });
    this.notify.notification(`You have created ${this.form.value.type}`);
  }

  deleteSpecie(specie) {
    this.speciesService.delete(specie.id).subscribe(() => this.getSpecies());
    this.notify.notification(`You have deleted ${specie.title}`);
  }

  cancel() {
    this.resetSpecie();
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
