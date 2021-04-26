import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  addToCart(product){
    this.cartService.addToCart(product);
    window.alert("Your product has been added to cart");
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    //First get the product id from the current router
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));

    //Find the product that corresponds with id provided in route
    //array.find(element => (first element that satisfies conditions))
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
