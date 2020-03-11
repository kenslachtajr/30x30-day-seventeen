import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Specie } from '@ngrx-species/core-data';

@Component({
  selector: 'ngrx-species-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.scss']
})
export class SpeciesDetailsComponent {
  currentSpecie: Specie;
  originalTitle;
  @Input() set specie(value) {
    if (value) this.originalTitle = value.title;
    this.currentSpecie = Object.assign({}, value);
  }
  @Input() form;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
