import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BlogState } from './blog.model';

const getBlogState = createFeatureSelector<BlogState>('blog');

export const getBlogsSelector = createSelector(
  getBlogState,
  (state: BlogState) => {
    return state.blogs;
  }
);

export const getBlogByIdSelector  = (id: number) =>
  createSelector(getBlogState, (state: BlogState) => {
    return state.blogs.find((blog) => blog.id === id);
  });
