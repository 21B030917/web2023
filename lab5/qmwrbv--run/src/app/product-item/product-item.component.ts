import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {

    @Output() status = new EventEmitter<any>();
    @Input() product!: Product;

    constructor() { }

    ngOnInit(): void {
    }

    share() {
      window.alert('The product has been shared!');
    }

    incrementLikes() {
      this.product.likes++;
    }

    delete(value: number) {
      this.status.emit(value);
    }
}