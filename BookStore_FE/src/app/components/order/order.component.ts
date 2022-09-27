import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/orderService/order.service';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
orderList : any;
qty : any;
getOrderBooks = new Array()
  constructor(private orderService : OrderService, private books : BookService) { }

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
        this.books.getBookById(element.bookId).subscribe((response : any)=>{
          console.log(response)
          this.getOrderBooks.push(response.data)
        })
      })
      console.log(this.getOrderBooks)
    })
  }

}
