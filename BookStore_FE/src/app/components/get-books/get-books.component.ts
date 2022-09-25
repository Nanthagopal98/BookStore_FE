import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.scss']
})
export class GetBooksComponent implements OnInit {

  bookList : any;
  totalBooks : any;
  constructor(private bookService : BookService, private route : Router) { }

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
  quickView(books : any){
    console.log(books.bookId)
    localStorage.setItem('bookId', books.bookId);
    this.route.navigateByUrl("/home/quickView")
  }

}
