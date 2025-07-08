import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../../shared/store/blog/blog.model';
import { Store } from '@ngrx/store';
import { getBlogsSelector } from '../../shared/store/blog/blog.selectors';
import { MatDialog } from '@angular/material/dialog';
import { AddblogComponent } from '../addblog/addblog.component';
import {
  add_Blog_Action,
  delete_Blog_Action,
  load_Blogs_Action,
} from '../../shared/store/blog/blog.actions';

@Component({
  selector: 'app-blog',
  standalone: false,

  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  blogs: BlogModel[] = [];
  constructor(
    private store: Store<{ blogs: BlogModel }>,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.store.dispatch(load_Blogs_Action());
    this.store.select(getBlogsSelector).subscribe((data) => {
      this.blogs = data;
      console.log('Blogs from store:', this.blogs);
    });
  }

  addBlog() {
    this.openPopup(0, 'Add Blog', false);
  }

  handleEdit(id: number) {
    this.openPopup(id, 'Edit Blog', true);
  }

  handleDelete(id: number) {
    if (confirm('Are you sure you want to delete this blog?')) {
      this.store.dispatch(delete_Blog_Action({ id: id }));
    }
  }

  openPopup(id: any, title: string, isEdit: boolean = false) {
    const dialogRef = this.dialog.open(AddblogComponent, {
      width: '400px',
      data: {
        id: id ?? 0,
        title: title,
        isEdit: isEdit,
      },
    });
  }
}
