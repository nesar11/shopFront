import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service'
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productdata: Product
  constructor(private _product: ProductService,
    private _router: Router

  ) { }

  ngOnInit() {
    this.productdata = new Product();
    console.log(this.productdata)
  }

  addProduct() {

    this._product.addProduct(this.productdata)
      .subscribe(
        res => {
          console.log(res)

          this._router.navigate(['/products'])
        },
        err => console.log(err)
      )
  }


}
