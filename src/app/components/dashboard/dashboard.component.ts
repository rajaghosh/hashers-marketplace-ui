// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent {

// }

//--------------------------------------------------------------------------------------------------



// import { Component, OnInit } from '@angular/core';

// interface Item {
//   name: string;
//   description: string;
//   price: number;
//   image: string;
// }

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//   items: Item[] = [
//     { name: 'Item 1', description: 'Description 1', price: 100, image: 'path/to/image1.jpg' },
//     { name: 'Item 2', description: 'Description 2', price: 200, image: 'path/to/image2.jpg' }
//   ];

//   constructor() { }

//   ngOnInit(): void { }
// }

//--------------------------------------------------------------------------------------------------


import { Component, OnInit } from '@angular/core';

interface Item {
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  items: Item[] = [
    { name: 'Item 1', description: 'Description 1', price: 100, image: 'path/to/image1.jpg' },
    { name: 'Item 2', description: 'Description 2', price: 200, image: 'path/to/image2.jpg' }
  ];
  filteredItems: Item[] = this.items;

  constructor() { }

  ngOnInit(): void { }

  search(query : string): void {
    // query = query ?? "";
    this.filteredItems = this.items.filter(item => item.name.toLowerCase().includes(query?.toLowerCase()));
  }
}