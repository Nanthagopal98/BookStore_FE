import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';
import { OrderService } from 'src/app/services/orderService/order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  constructor(private bookService: BookService, private orderService : OrderService) { }
  bookId = localStorage.getItem('orderedBook');
  cartIdInfo =JSON.parse(localStorage.getItem('orderedCart')!)
  books: any
  address : any;
  selectedValue : any
  ngOnInit(): void {
    this.getOrderBook()
    this.getAddress()
    
  }
  getOrderBook() {
    this.bookService.getBookById(this.bookId).subscribe((response: any) => {
      console.log(response.data)
      this.books = response.data
    })
  }

  getAddress(){
    this.orderService.getAddressService().subscribe((response : any)=>{
      console.log(response.data)
      this.address = response.data
    })
  }

  order(){
    console.log(this.cartIdInfo)
    console.log(this.selectedValue)
    let reqData ={
      cartId : this.cartIdInfo,
      addressId : this.selectedValue,
      dateTime : new Date()
    }
    this.orderService.placeOrder(reqData).subscribe((response : any) =>{
      console.log(response)
    })
  }
} 
  
