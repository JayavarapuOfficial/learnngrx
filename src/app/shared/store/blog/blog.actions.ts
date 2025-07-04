import { createAction, props } from '@ngrx/store';
import { BlogModel } from './blog.model';

export const add_Blog_Action = createAction(
  '[Blog] Add Blog',
  props<{ value: BlogModel }>()
);
export const update_Blog_Action = createAction(
  '[Blog] Update Blog',
  props<{ value: BlogModel }>()
);
export const delete_Blog_Action = createAction(
  '[Blog] Delete Blog',
  props<{ id: number }>()
);
export const load_Blogs_Action = createAction('[Blog] Load Blogs');
