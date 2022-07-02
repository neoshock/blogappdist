import { BlogService } from './../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  public blog: any;

  constructor(private route: ActivatedRoute, private blog_service: BlogService) { }

  ngOnInit(): void {
    const id: number = Number.parseInt(this.route.snapshot.paramMap.get('idblog')!);
    this.getBlogById(id);
  }

  getBlogById(id: number) {
    this.blog = this.blog_service.getBlogById(id);
    console.log(this.blog);
  }

}
