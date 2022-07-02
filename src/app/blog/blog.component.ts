import { BlogService } from './../services/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public blogs: any[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }

  cleanHtml(content: string) {
    return content.replace(/<\/?[^>]+(>|$)/g, '');
  }

  getImage(index: number) {
    return this.blogService.getFirstImage(this.blogs[index].content);
  }

  findBlogByTitle(event: any) {
    if(event.target.value.length > 0) {
      this.blogs = this.blogService.getBlogByTitle(event.target.value).filter(blog => blog != undefined);
    }else{
      this.blogs = this.blogService.getBlogs();
    }
  }

}
