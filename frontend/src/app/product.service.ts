
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _productUrl = "http://localhost:3001/api2/product";



  // localhost:3000/api2/product/add

  constructor(private http: HttpClient,
    private _router: Router) { }

  getProducts(pageIndex, limit) {
    return this.http.get<any>(this._productUrl + '/read' + `?pageIndex=${pageIndex}&limit=${limit}`)
  }

  addProduct(product) {
    return this.http.post<any>(this._productUrl + '/add', product)
  }

}
