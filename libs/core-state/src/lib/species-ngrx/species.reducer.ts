import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as speciesActions from './species.actions';
import { Specie } from '@ngrx-species/core-data';

export const SPECIES_FEATURE_KEY = 'species';

export interface SpeciesState extends EntityState<Specie> {
  selectedSpecieId?: string | number;
  isLoading: boolean;
}

export interface SpeciesPartialState {
  readonly [SPECIES_FEATURE_KEY]: SpeciesState;
}

export const speciesAdapter: EntityAdapter<Specie> = createEntityAdapter<Specie>();

export const initialState: SpeciesState = speciesAdapter.getInitialState({
  selectedSpecieId: null,
  isLoading: false
});

const speciesReducer = createReducer(
  initialState,
  on(speciesActions.specieSelected, (state, { selectedSpecieId }) =>
    Object.assign({}, state, { selectedSpecieId })
  ),
  on(speciesActions.speciesLoaded, (state, { species }) =>
    speciesAdapter.setAll(species, { ...state, isLoading: false })
  ),
  on(speciesActions.specieCreated, (state, { specie }) =>
    speciesAdapter.addOne(specie, { ...state, isLoading: false })
  ),
  on(speciesActions.specieUpdated, (state, { specie }) =>
    speciesAdapter.upsertOne(specie, { ...state, isLoading: false })
  ),
  on(speciesActions.specieDeleted, (state, { specie }) =>
    speciesAdapter.removeOne(specie.id, { ...state, isLoading: false })
  ),
  on(
    speciesActions.loadSpecies,
    speciesActions.createSpecie,
    speciesActions.updateSpecie,
    speciesActions.deleteSpecie,
    state => ({
      ...state,
      isLoading: true
    })
  )
);

export function reducer(state: SpeciesState | undefined, action: Action) {
  return speciesReducer(state, action);
}
