import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

items = [];

addToCart(product){
  this.items.push(product);
}

getItems(){
  return this.items;
}

cleartCart(){
  this.items = [];
  return this.items;
}
  constructor() { }

}