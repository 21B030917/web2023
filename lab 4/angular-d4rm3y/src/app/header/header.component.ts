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
  source1: string = "/assets/logo.jpg";
  source2: string = "/assets/shopping.jpg";
  // getSlogan(){
  //   return 'This is a new slogan for this web application';
  // }

}