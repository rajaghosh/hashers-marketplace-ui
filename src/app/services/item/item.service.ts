// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ItemService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';

interface Item {
  name: string;
  description: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: Item[] = [];

  addItem(item: Item): void {
    this.items.push(item);
  }

  editItem(index: number, item: Item): void {
    this.items[index] = item;
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }

  getItems(): Item[] {
    return this.items;
  }
}