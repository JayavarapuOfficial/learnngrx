import { BlogModel } from '../blog/blog.model';
import { CounterModel } from '../counter.model';

export interface AppstateModel {
  counter: CounterModel;
  blog: BlogModel[];
}
