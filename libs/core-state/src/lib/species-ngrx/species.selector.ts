import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  SPECIES_FEATURE_KEY,
  speciesAdapter,
  SpeciesPartialState,
  SpeciesState
} from './species.reducer';

export const selectSpeciesState = createFeatureSelector<
SpeciesPartialState,
SpeciesState
>(SPECIES_FEATURE_KEY);

const { selectAll, selectEntities } = speciesAdapter.getSelectors();

export const selectSpeciesLoading = createSelector(
  selectSpeciesState,
  (state: SpeciesState) => selectAll(state)
);

export const selectAllSpecies = createSelector(
  selectSpeciesState,
  (state: SpeciesState) => selectAll(state)
);

export const selectSpeciesEntities = createSelector(
  selectSpeciesState,
  (state: SpeciesState) => selectEntities(state)
);

export const selectSpecieId = createSelector(
  selectSpeciesState,
  (state: SpeciesState) => state.selectedSpecieId
);

export const selectSpecie = createSelector(
  selectSpeciesEntities,
  selectSpecieId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
