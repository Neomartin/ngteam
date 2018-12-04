import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Item } from '../models/item.model';
import { Subject } from 'rxjs';
// import { Image } from '../models/image.model';

@Injectable()
export class ProductService {
  public headers;
  public url;
  private productSearchSource = new Subject<string>();
  productSearch$ = this.productSearchSource.asObservable();
  constructor(
    private _http: HttpClient
  ) {
    this.url = GLOBAL.url;
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
   }
  // saveProduct(item: Item): Observable<any> {
  //   const product = JSON.stringify(item);
  //   return this._http.post(this.url + 'product', product, { headers: this.headers});
  // }
  getProduct(id = null, name = null): Observable<any> {
    if (name) {
      console.log('Namesito ');
      return this._http.get(this.url + 'products/' + name, { headers: this.headers });
    }
    if (id) {
      return this._http.get(this.url + 'product/' + id, { headers: this.headers });
    }
    return this._http.get(this.url + 'products/', { headers: this.headers });
  }
  deleteProduct(id) {
    return this._http.delete(this.url + 'product/' + id, { headers: this.headers });
  }
  // updateImages(image: Array<Image>, id): Observable<any> {
  //   return this._http.put(this.url + 'update-image-product/' + id , image,  { headers: this.headers });
  // }
  getDolar(): Observable<any> {
    return this._http.get(this.url + 'get-dolar', { headers: this.headers });
  }
  saveCategory(category): Observable<any> {
    const cat = {'name': category};
    return this._http.post(this.url + 'category', cat, { headers: this.headers });
  }
  getCategories(id = null): Observable<any> {
    if (!id) {
      return this._http.get(this.url + 'category', { headers: this.headers });
    }
  }
}
