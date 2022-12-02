import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  //Array Binding
  products: Array<Product> = [
    {
      productID: 1,
      productName: "Laptop",
      productDetails: "Details"
    },
    {
      productID: 2,
      productName: "CellPhone",
      productDetails: "Details"
    },
    {
      productID: 3,
      productName: "Ipad",
      productDetails: "Details"
    }
  ]
//variable binding
  // product: Product =
  //   {
  //     productID: 1,
  //     productName: "Laptop",
  //     productDetails: "Details"
  //   }
  // product1: Product = {
  //   productID: 2,
  //   productName: "CellPhone",
  //   productDetails: "Details"
  // }

  // product2: Product = {
  //   productID: 3,
  //   productName: "IPad",
  //   productDetails: "Details"
  // }

  constructor() { /* TODO document why this constructor is empty */ }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

}
