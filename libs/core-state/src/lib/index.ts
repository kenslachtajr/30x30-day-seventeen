import { ActionReducerMap } from '@ngrx/store';
import * as fromSpecies from './species-ngrx/species.reducer';

export interface AppState {
  species: fromSpecies.SpeciesState;
}

export const reducers: ActionReducerMap<AppState> = {
  species: fromSpecies.reducer
};

export const defaultState: AppState = {
  species: { ids: [] } as fromSpecies.SpeciesState
};
