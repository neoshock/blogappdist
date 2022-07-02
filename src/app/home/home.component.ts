import { BlogService } from './../services/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public blogs: any[] = [];

  constructor(private blogServices: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogServices.getBlogs();
  }

  //make a funtion for make a resume of the blogs
  public makeResume(content: string, maxLength: number) {
    return this.cleanHtml(content.substring(0, maxLength) + '...');
  }

  getLastBlog(): any | undefined {
    return this.blogServices.getBlogByLastDate();
  }

  getImage(index: number) {
    return this.blogServices.getFirstImage(this.blogs[index].content);
  }

  //clean html tags
  public cleanHtml(content: string) {
    return content.replace(/<\/?[^>]+(>|$)/g, '');
  }

}
