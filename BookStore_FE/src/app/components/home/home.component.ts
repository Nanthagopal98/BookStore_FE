import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  constructor(private router : Router) { }
  ngOnDestroy(): void {
    this.logout()
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('cartId');
    localStorage.removeItem('orderedCart');
    localStorage.removeItem('orderedBook');
    localStorage.removeItem('bookId');
    this.router.navigateByUrl('/login');
  }

}
