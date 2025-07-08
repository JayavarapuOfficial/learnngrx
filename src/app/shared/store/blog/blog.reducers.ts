import { createReducer, on } from '@ngrx/store';
import { initialBlogState } from './blog.state';
import {
  add_Blog_Action,
  delete_Blog_Action,
  load_Blogs_Action,
  load_blogs_success_effect_action,
  update_Blog_Action,
} from './blog.actions';

const _blogReducer = createReducer(
  initialBlogState,
  on(load_Blogs_Action, (state) => {
    return { ...state };
  }),
  on(add_Blog_Action, (state, action) => {
    const blogInput = { ...action.value, id: state.blogs.length + 1 };
    return {
      ...state,
      blogs: [...state.blogs, blogInput],
    };
  }),
  on(update_Blog_Action, (state, action) => {
    const updatedBlogs = state.blogs.map((blog) =>
      blog.id === action.value.id ? action.value : blog
    );
    return {
      ...state,
      blogs: updatedBlogs,
    };
  }),
  on(delete_Blog_Action, (state, action) => {
    const updatedBlogs = state.blogs.filter((blog) => blog.id !== action.id);
    return { ...state, blogs: updatedBlogs };
  }),
  on(load_blogs_success_effect_action, (state, action) => {
    return { ...state, blogs: action.blogs };
  })
);

export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}
