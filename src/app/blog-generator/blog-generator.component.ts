import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-generator',
  templateUrl: './blog-generator.component.html',
  styleUrls: ['./blog-generator.component.scss']
})
export class BlogGeneratorComponent implements OnInit {

  public title: string = '';
  public date: any; 
  public autor: string = '';
  public content: any;

  public content_result: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  generateBlog() {
    let content = document.getElementById('content');
    //generate a json 
    let json = {
      "title": this.title,
      "content": this.content,
      "date": this.date,
      "autor": this.autor,
      "id": Math.random()
    }

    this.content_result = JSON.stringify(json);

  }

  onSelectionChange(event: any) {
    console.log(event);
  }

}
