import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: any[] = []

  blogs_json: any[] = [
    {"title":"Origen del modelo relacional","content":"<p>ASDASDASDASDASDASD</p>\n<p>asd</p>\n<p>asd</p>\n<p>as</p>\n<p>d</p>\n<p>asd</p>\n<p>asdasd</p>","date":"2022-06-26","autor":"DASDASDASDASD","id":44554}
  ]

  constructor() {

  }

  getBlogs() {
    return this.blogs_json;
  }

  getBlog(id: number) {
    //return this.blogs.find(blog => blog.id === id);
  }

  //make a json file
  generateBlog(title: string, content: string, date: any, autor: string) {
    let json = {
      title: title,
      content: content,
      date: date,
      autor: autor,
      id: this.getRandomInt(100000)
    }

    this.blogs.push(json);
  }

  //getBlogBylastDate
  getBlogByLastDate() {
    return this.blogs_json.find(blog => blog.date === this.blogs_json[this.blogs_json.length - 1].date);
  }

  getBlogById(id: number) {
    return this.blogs_json.find(blog => blog.id === id);
  }

  getRandomInt(arg0: number) {
    return Math.floor(Math.random() * Math.floor(arg0));
  }

}
