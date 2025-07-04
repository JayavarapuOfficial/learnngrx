import { Actions } from '@ngrx/effects';
import { MasterService } from '../../master.service';
import { AppstateModel } from '../global/app.state.model';
import { Store } from '@ngrx/store';

export class BlogEffects {
  constructor(
    private actions$: Actions,
    private masterService: MasterService,
    private store: Store<AppstateModel>
  ) {}
}
