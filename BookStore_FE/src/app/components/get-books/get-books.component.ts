import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.scss']
})
export class GetBooksComponent implements OnInit {

  bookList : any;
  totalBooks : any;
  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.onSubmit()
  }

  onSubmit(){
    this.bookService.getallbooks().subscribe((response : any) =>{
      console.log(response);
      this.bookList = response.data;
      this.totalBooks = response.data.length;
      console.log(this.bookList);
      console.log(this.totalBooks)
    })
  }

}
