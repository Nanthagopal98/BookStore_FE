import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cartService/cart.service';
import { BookService } from 'src/app/services/bookService/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any;
  book : any
  cartBooks = new Array();
  qty : any
  orderQty = 1
  constructor(private cart: CartService, private getBooks: BookService, private route : Router) { }

  ngOnInit(): void {
    this.getCart()
  }
  getCart() {
    this.cart.getCartItems().subscribe((response: any) => {
      console.log(response);
      this.cartItems = response.data;
      console.log(this.cartItems)
      this.qty = this.cartItems.length;
      console.log(this.qty)
       this.cartItems.forEach((element: any) => {
        console.log(element)
        this.getBooks.getBookById(element.bookId).subscribe((response:any) =>{
          console.log(response.data)
          this.book = response.data
          this.cartBooks.push(this.book);
        })
      });
    })
    console.log(this.cartBooks); 
  }
  
  reduce(){
    if(this.orderQty > 1){
      this.orderQty = this.orderQty-1
    }
  }
  increase(){
    if(this.orderQty > 0){
      this.orderQty = this.orderQty+1
    }
  }
  removeCart(bookId : any){
    console.log(bookId);
    this.cart.remove(bookId).subscribe((response : any) =>{
      console.log(response );
      this.route.navigateByUrl('/home/cart')
    })
    
  }
}
