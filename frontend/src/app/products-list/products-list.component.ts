import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = []
  currentIndex: number;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.currentIndex = 1;
    this.getProduct(1, 9);
    // this._productService.getProducts(1, 10)
    //   .subscribe(
    //     res => {
    //       this.products = res.docs;
    //       console.log(res,this.products);
          
    //     },
    //     err => console.log(err)
    //   )
  }

  getProduct(page, limit) {
    this._productService.getProducts(page, limit)
    .subscribe(
      res => {
        this.products = res.docs;
        console.log(res,this.products);
        
      },
      err => console.log(err)
    )
  }

  nextPage() {
    this.currentIndex ++;
    this.getProduct(this.currentIndex, 9);
  }

  getPage(num) {
    this.getProduct(num, 9);
  }

  previousPage() {
    if (this.currentIndex > 1) {
      this.currentIndex --;
      this.getProduct(this.currentIndex, 9);
    }
 
  }
}

