import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Specie } from '@species/core-data';

@Component({
  selector: 'species-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent {
  @Input() species: Specie[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
