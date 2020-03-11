import { createAction, props } from '@ngrx/store';
import { Specie } from '@ngrx-species/core-data';

export const specieSelected = createAction(
  '[SPECIE] Specie Selected',
  props<{ selectedSpecieId: string | number }>()
);

export const loadSpecies = createAction(
  '[SPECIE] Load Species'
  );

export const speciesLoaded = createAction(
  '[SPECIE] Species Loaded',
  props<{ species: Specie[] }>()
);

export const loadSpecie = createAction(
  '[SPECIE] Load Specie',
  props<{ specie: Specie }>()
);

export const specieLoaded = createAction(
  '[SPECIE] Specie Loaded',
  props<{ specie: Specie }>()
);

export const createSpecie = createAction(
  '[SPECIE] Create Specie',
  props<{ specie: Specie }>()
);

export const specieCreated = createAction(
  '[SPECIE] Specie Created',
  props<{ specie: Specie }>()
);

export const updateSpecie = createAction(
  '{SPECIE] Update Specie',
  props<{ specie: Specie }>()
);

export const specieUpdated = createAction(
  '[SPECIE] Specie Updated',
  props<{ specie: Specie }>()
)

export const deleteSpecie = createAction(
  '[SPECIE] Delete Specie',
  props<{ specie: Specie }>()
);

export const specieDeleted = createAction(
  '[SPECIE] Delete Specie',
  props<{ specie: Specie }>()
);




