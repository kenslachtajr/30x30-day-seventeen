import { Injectable } from '@angular/core';
import { Action, select, Store, ActionsSubject } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as fromSpecies from './species.reducer';
import * as speciesActions from './species.actions';
import * as speciesSelectors from './species.selector';
import { Specie } from '@ngrx-species/core-data';

@Injectable({
  providedIn: 'root'
})
export class SpeciesFacade {
  allSpecies$ = this.store.pipe(select(speciesSelectors.selectAllSpecies));
  selectedSpecie$ = this.store.pipe(select(speciesSelectors.selectSpecie));
  specieLoading$ = this.store.pipe(
    select(speciesSelectors.selectSpeciesLoading)
  );
  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === speciesActions.createSpecie({} as any).type ||
        action.type === speciesActions.updateSpecie({} as any).type ||
        action.type === speciesActions.deleteSpecie({} as any).type
    )
  );

  constructor(
    private actions$: ActionsSubject,
    private store: Store<fromSpecies.SpeciesPartialState>
  ) {}

  selectSpecie(selectedSpecieId: string | number) {
    this.dispatch(speciesActions.specieSelected({ selectedSpecieId }));
  }

  loadSpecies() {
    this.dispatch(speciesActions.loadSpecies());
  }

  loadSpecie(specie: Specie) {
    this.dispatch(speciesActions.loadSpecie({ specie }));
  }

  createSpecie(specie: Specie) {
    this.dispatch(speciesActions.createSpecie({ specie }));
  }

  updateSpecie(specie: Specie) {
    this.dispatch(speciesActions.updateSpecie({ specie }));
  }

  deleteSpecie(specie: Specie) {
    this.dispatch(speciesActions.deleteSpecie({ specie }));
  }
  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
