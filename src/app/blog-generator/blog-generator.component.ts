import { BlogService } from './../services/blog.service';
import { Component, OnInit } from '@angular/core';
import tinymce from 'tinymce';

@Component({
  selector: 'app-blog-generator',
  templateUrl: './blog-generator.component.html',
  styleUrls: ['./blog-generator.component.scss']
})
export class BlogGeneratorComponent implements OnInit {

  public title: string = '';
  public date: Date = new Date;
  public autor: string = '';
  public content: any;

  public content_result: string = '';

  public preview: any;

  public tinymceInit = {
    height: 500,
    plugins: [
      'a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export',
      'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
      'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
    ],
    toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    image_advtab: true
  }

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {

  }

  generateBlog() {

    //generate a json 
    let json = {
      title: this.title,
      content: this.content,
      date: this.date,
      autor: this.autor,
      id: this.getRandomInt(100000)
    }

    this.content_result = JSON.stringify(json);

    this.blogService.generateBlog(this.title, this.content, this.date, this.autor);

    //insert a string in the preview
    this.preview = this.content;
  }

  //generate a int random number with characters
  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  onSelectionChange(event: any) {
    console.log(event);
  }

}
