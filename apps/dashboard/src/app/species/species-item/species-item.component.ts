import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeciesService } from '@ngrx-species/core-data';

@Component({
  selector: 'ngrx-species-species-item',
  templateUrl: './species-item.component.html',
  styleUrls: ['./species-item.component.scss']
})
export class SpeciesItemComponent implements OnInit {
  _specie$;
  public get specie$() {
    return this._specie$;
  }
  public set specie$(value) {
    this._specie$ = value;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private specieService: SpeciesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.specie$ = this.specieService.findOne(id);
    });
  }

  goBackToSpecies() {
    this.router.navigate(['/species']);
  }
}
