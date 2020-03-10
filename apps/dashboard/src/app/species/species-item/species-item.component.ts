import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeciesService } from '@species/core-data';

@Component({
  selector: 'species-species-item',
  templateUrl: './species-item.component.html',
  styleUrls: ['./species-item.component.css']
})
export class SpeciesItemComponent implements OnInit {
  _specie$;
  public get specie$() {
    return this._specie$;
  }
  public set specie$(value) {
    this._specie$ - value;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private specieService: SpeciesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.specie$ = this.specieService.findOne(id);
    });
  }

  goBackToSpecies() {
    this.router.navigate(['./species']);
  }

}
