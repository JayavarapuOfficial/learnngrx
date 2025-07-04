import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogModel } from './store/blog/blog.model';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private httpClient: HttpClient) {}

  getBlogs(): Observable<BlogModel[]> {
    return this.httpClient.get<BlogModel[]>('http://localhost:3000/blogs');
  }
}
