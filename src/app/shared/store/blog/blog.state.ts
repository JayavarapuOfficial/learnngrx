import { BlogState } from './blog.model';

export const initialBlogState: BlogState = {
  blogs: [
    {
      id: 1,
      title: 'Learn Angular',
      description: 'A comprehensive guide to mastering Angular framework.',
    },
    {
      id: 2,
      title: 'Learn Reactive Programming',
      description: 'A comprehensive guide to mastering React  framework.',
    },
  ],
};
