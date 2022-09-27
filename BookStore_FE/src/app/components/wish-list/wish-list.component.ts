import { Component, OnInit } from '@angular/core';
import { WishListService } from 'src/app/services/wish-listService/wish-list.service';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  wishListItems : any
  qty : any;
  getWishListBooks = new Array()
  constructor(private wishListservice : WishListService, private books : BookService) { }

  ngOnInit(): void {
    this.getWishList()
  }
  getWishList() {
    this.wishListservice.wishListDetails().subscribe((response : any) => {
      console.log(response);
      this.wishListItems = response.data
      this.qty = this.wishListItems.length
      this.wishListItems.forEach((element : any) =>{
        console.log(element)
        this.books.getBookById(element.bookId).subscribe((response : any)=>{
          console.log(response)
          this.getWishListBooks.push(response.data)
        })
      })
      console.log(this.getWishListBooks)
    })
  }
  deleteBook(bookId:any){
    this.wishListservice.deleteItem(bookId).subscribe((response : any) =>{
      console.log(response);
    })
  }
}
