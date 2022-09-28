import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/orderService/order.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})
export class OrderSuccessComponent implements OnInit {
  adminList: any;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getAdmin()
  }
  getAdmin() {
    this.orderService.getAdminService().subscribe((response: any) => {
      console.log(response.data)
      this.adminList = response.data
    })
  }

}
