import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() { }

  ngOnInit(): void {}

  slogan: string = 'Your one stop shop for everything.';
  source1: string = "https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?w=2000";
  source2: string = "https://preply.com/wp-content/uploads/2018/04/shopping_bags.jpg";
  // getSlogan(){
  //   return 'This is a new slogan for this web application';
  // }

}