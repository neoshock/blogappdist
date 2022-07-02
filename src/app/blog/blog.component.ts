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

  makeResume(content: string, maxLength: number) {
    return this.blogService.getFirstParagraph(content);
  }

  cleanHtml(content: string) {
    return content.replace(/<\/?[^>]+(>|$)/g, '');
  }

}
