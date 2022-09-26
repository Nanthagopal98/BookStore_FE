import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';
import { FeedbackService } from 'src/app/services/feedbackService/feedback.service';
import { CartService } from 'src/app/services/cartService/cart.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  bookId = localStorage.getItem('bookId');
  getBookById: any;
  qty: any;
  review: any;
  star: any;
  feedbackList : any;
  constructor(private getBook: BookService, private feedback : FeedbackService, private cart : CartService) { }

  ngOnInit(): void {
    this.getbook()
    this.getFeedback()
  }
  getbook() {
    this.getBook.getBookById(this.bookId).subscribe((response: any) => {
      this.getBookById = response.data;
      this.qty = response.length;
      console.log(this.bookId)
      console.log(this.getBookById);
    })
  }
  onsubmit() {
    let reqData = {
      rating: this.star,
      comment: this.review,
      bookId: this.getBookById.bookId
    }
    this.feedback.addFeedback(reqData).subscribe((response : any) =>{
      console.log(response);
    })
  }
  rating1() {
    this.star = 1
    console.log(this.star)
  }
  rating2() {
    this.star = 2
    console.log(this.star)
  }
  rating3() {
    this.star = 3
    console.log(this.star)
  }
  rating4() {
    this.star = 4
    console.log(this.star)
  }
  rating5() {
    this.star = 5
    console.log(this.star)
  }
  getFeedback(){
    this.feedback.getFeedback().subscribe((response : any) => {
      console.log(response);
      this.feedbackList = response.data
    })
  }

  addToCart(){
    let reqData = {
      bookId : this.getBookById.bookId,
      quantity : 1
    }
    this.cart.addToCart(reqData).subscribe((response :any) =>{
      console.log(response)
    })
  }
}

