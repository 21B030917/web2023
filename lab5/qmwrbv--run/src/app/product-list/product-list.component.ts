import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/products';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


// export class ProductListComponent {
//   products = [...products];

//   share() {
//     window.alert('The product has been shared!');
//   }

//   onNotify() {
//     window.alert('You will be notified when the product goes on sale');
//   }

//   editProducts(id: number) {
//     let idx = this.products.findIndex(p => p.id === id);
//     this.products.splice(idx, 1);
//   }
// }


export class ProductListComponent implements OnInit {

  products = [...products];

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('productId'));

  }

   editProducts(id: number) {
    let idx = this.products.findIndex(p => p.id === id);
    this.products.splice(idx, 1);
  }

  getTotalProducts(){
    return this.products.length;
  }

  getTotalWashingAndCleaning(){
    return this.products.filter(p => p.type === 'washing_cleaning').length;
  }
  getTotalFaceMasks(){
    return this.products.filter(p => p.type === 'face_masks').length;
  }
  getTotalPatches(){
    return this.products.filter(p => p.type === 'patches').length;
  }

  getTotalLips(){
    return this.products.filter(p => p.type === 'lips').length;
  }

  productCountRadioButton: string = 'all';
  searchText: string = '';

  onFilterRadioButtonChanged(data: string){
    this.productCountRadioButton = data;
    //console.log(this.courseCountRadioButton);
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    // console.log(this.searchText);
  }
}
