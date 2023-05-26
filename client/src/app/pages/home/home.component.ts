import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/_services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  booksData = [];
  constructor(
    private _bookService: BookService
  ){
  }

  ngOnInit(){
    this.loadBooks();
  }
  loadBooks(){
    this._bookService.getBooks({limit:10, page:1}).subscribe((books) => {
      if(books){
        this.booksData = books
      }
    })
  }

}
