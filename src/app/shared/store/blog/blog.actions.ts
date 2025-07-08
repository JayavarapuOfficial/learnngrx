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

// Effects actions
export const LOAD_BLOGS_SUCCESS = '[Blog] Load Blogs Success';
export const LOAD_BLOGS_FAILURE = '[Blog] Load Blogs Failure';
export const LOAD_BLOG = '[Blog] Load Blog';

export const load_blogs_success_effect_action = createAction(
  '[Blog] Load Blogs Effect Action',
  props<{ blogs: BlogModel[] }>()
);
