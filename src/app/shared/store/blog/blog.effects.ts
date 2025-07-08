import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MasterService } from '../../master.service';
import { AppstateModel } from '../global/app.state.model';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  load_Blogs_Action,
  load_blogs_success_effect_action,
} from './blog.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { BlogModel } from './blog.model';

@Injectable()
export class BlogEffects {
  constructor(
    private actions$: Actions,
    private masterService: MasterService,
    private store: Store<AppstateModel>
  ) {}

  _blog = createEffect(() =>
    this.actions$.pipe(
      ofType(load_Blogs_Action),
      exhaustMap((action) => {
        return this.masterService.getBlogs().pipe(
          map((blogs: BlogModel[]) => {
            return load_blogs_success_effect_action({ blogs: blogs });
          }),
          catchError(() => EMPTY)
        );
      })
    )
  );
}
