import { blogReducer } from '../blog/blog.reducers';
import { counterReducer } from '../counter.reducers';

export const AppStore = {
  counter: counterReducer,
  blog: blogReducer,
};
