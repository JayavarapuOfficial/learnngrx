import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { BlogModel, BlogState } from '../../shared/store/blog/blog.model';
import { FormBuilder, Validators } from '@angular/forms';
import {
  add_Blog_Action,
  update_Blog_Action,
} from '../../shared/store/blog/blog.actions';
import { Store } from '@ngrx/store';
import {
  getBlogByIdSelector,
  getBlogsSelector,
} from '../../shared/store/blog/blog.selectors';

@Component({
  selector: 'app-addblog',
  standalone: false,

  templateUrl: './addblog.component.html',
  styleUrl: './addblog.component.css',
})
export class AddblogComponent implements OnInit {
  pageTitle!: string;
  editBlogId: number = 0;
  constructor(
    private dialogRef: MatDialogRef<AddblogComponent>,
    private formBuilder: FormBuilder,
    private store: Store<{ blogs: BlogState }>,
    @Inject(MAT_DIALOG_DATA)
    public data: { id: number; title: string; isEdit: boolean }
  ) {}
  ngOnInit(): void {
    this.pageTitle = this.data.title;

    if (this.data.isEdit) {
      this.editBlogId = this.data.id;
      this.store
        .select(getBlogByIdSelector(this.editBlogId))
        .subscribe((blog) => {
          if (blog) {
            this.blogForm.setValue({
              id: blog.id,
              title: blog.title,
              description: blog.description,
            });
          } else {
            console.error('Blog not found for editing:', this.editBlogId);
          }
        });
      // // If it's an edit operation, fetch the blog details and populate the form
      // this.store.select(getBlogsSelector).subscribe((state) => {
      //   const blogToEdit = state.find((blog) => blog.id === this.editBlogId);
      //   if (blogToEdit) {
      //     this.blogForm.patchValue({
      //       id: blogToEdit.id,
      //       title: blogToEdit.title,
      //       description: blogToEdit.description,
      //     });
      //   }
      // });
    }
  }

  blogForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    title: this.formBuilder.control('', Validators.required),
    description: this.formBuilder.control('', Validators.required),
  });

  cancel() {
    this.dialogRef.close();
  }
  addBlog() {
    // Here you would typically dispatch an action to add the blog
    // For example:
    // this.store.dispatch(add_Blog_Action({ value: { title, description } }));
    //console.log('Blog added:', { title, description });
    //this.closePopup();
  }
  onSubmit() {
    if (this.blogForm.valid) {
      const newBlog: BlogModel = {
        id: this.blogForm.value.id || 0,
        title: this.blogForm.value.title as string,
        description: this.blogForm.value.description as string,
      };
      if (this.data.isEdit) {
        this.store.dispatch(update_Blog_Action({ value: newBlog }));
      } else {
        this.store.dispatch(add_Blog_Action({ value: newBlog }));
      }
      this.closePopup();
    }
    console.log('Form submitted:', this.blogForm.value);
  }

  closePopup() {
    this.dialogRef.close();
  }
}
