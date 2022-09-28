import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/orderService/order.service';
import { BookService } from 'src/app/services/bookService/book.service';
import {ChangeDetectorRef } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
orderList : any;
qty : any;
getOrderBooks = new Array()
date = new Array()
getdate : any
i = 0;

  constructor(private orderService : OrderService, private books : BookService, private change : ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.getOrders()
  }
  getOrders() {
    this.orderService.getOrder().subscribe((response : any) => {
      console.log(response);
      this.orderList = response.data
      this.qty = this.orderList.length
      this.orderList.forEach((element : any) =>{
        console.log(element)
        this.date.push(element.dateTime);
        console.log(this.date)
        this.books.getBookById(element.bookId).subscribe((response : any)=>{
          console.log(response)
          this.getOrderBooks.push(response.data)
        })
      })
      console.log(this.getOrderBooks)
    })
  }
  
  datemethod(){
    if(this.i < this.qty){
      this.getdate = this.date[this.i]
      this.i = this.i + 1
      console.log(this.i)
      console.log(this.getdate)
      this.getdate;
      this.change.detectChanges();
    }
  }
}
