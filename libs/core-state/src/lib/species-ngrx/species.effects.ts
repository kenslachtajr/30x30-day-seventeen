import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as speciesActions from './species.actions';
import { SpeciesFacade } from './species.facade';
import {
  Specie,
  SpeciesService,
  NotifyService
} from '@ngrx-species/core-data';
import { SpeciesPartialState } from './species.reducer';

@Injectable()
export class SpeciesEffect {
  loadSpecies$ = createEffect(() =>
  this.dataPersistence.fetch(speciesActions.loadSpecies, {
    run: (
      action: ReturnType<typeof speciesActions.loadSpecies>,
      state: SpeciesPartialState
    ) => {
      return this.speciesService
      .all()
      .pipe(
        map((species: Specie[]) =>
        speciesActions.speciesLoaded({species})
        )
      );
    },
    onError: (
      action: ReturnType<typeof speciesActions.loadSpecies>,
      error
    ) => {
      this.notify.notification('Effect Load All Error', error);
    }
  })
  );

  loadSpecie$ = createEffect(() =>
  this.dataPersistence.fetch(speciesActions.loadSpecie, {
    run: (
      action: ReturnType<typeof speciesActions.loadSpecie>,
      state: SpeciesPartialState
    ) => {
      return this.speciesService
      .findOne(action.specie)
      .pipe(
        map((specie: Specie) =>
        speciesActions.specieLoaded({specie})
        )
      );
    },
    onError: (
      action: ReturnType<typeof speciesActions.loadSpecie>,
      error
    ) => {
      this.notify.notification('Effect Load Error', error);
    }
  })
  );

  selectSpecieOnLoad$ = createEffect(() =>
  this.dataPersistence.actions.pipe(
    ofType(speciesActions.specieLoaded),
    map(({specie}) =>
    speciesActions.specieSelected({ selectedSpecieId: specie.id })
    )
  )
  );

  createSpecie$ = createEffect(() =>
  this.dataPersistence.pessimisticUpdate(speciesActions.createSpecie, {
    run: (
      action: ReturnType<typeof speciesActions.createSpecie>,
      state: SpeciesPartialState
    ) => {
      return this.speciesService.create(action.specie).pipe(
        map((specie: Specie) =>
        speciesActions.specieCreated({ specie })
        ),
      );
    },
    onError: (
      action: ReturnType<typeof speciesActions.createSpecie>,
      error
    ) => {
      this.notify.notification('Effect Create Error', error);
    }
  })
  );

  updateSpecie$ = createEffect(() =>
  this.dataPersistence.pessimisticUpdate(speciesActions.updateSpecie, {
    run: (
      action: ReturnType<typeof speciesActions.updateSpecie>,
      state: SpeciesPartialState
    ) => {
      return this.speciesService.update(action.specie).pipe(
        map((specie: Specie) =>
        speciesActions.specieUpdated({specie})
        ),
      );
    },
    onError: (
      action: ReturnType<typeof speciesActions.updateSpecie>,
      error
    ) => {
      this.notify.notification('Effect Update Error', error);
    }
  })
  );

  deleteSpecie$ = createEffect(() =>
  this.dataPersistence.pessimisticUpdate(speciesActions.deleteSpecie, {
    run: (
      action: ReturnType<typeof speciesActions.deleteSpecie>,
      state: SpeciesPartialState
    ) => {
      return this.speciesService
      .delete(action.specie)
      .pipe(
        map(() =>
        speciesActions.specieDeleted({specie: action.specie})
        )
      );
    },
    onError: (
      action: ReturnType<typeof speciesActions.deleteSpecie>,
      error
    ) => {
      this.notify.notification('Effect Delete Error', error);
    }
  })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<SpeciesPartialState>,
    private speciesService: SpeciesService,
    private speciesFacade: SpeciesFacade,
    private notify: NotifyService
  ) {}
}
