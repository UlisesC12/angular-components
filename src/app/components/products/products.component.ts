import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  myShoppingCart: Product[] = [];
  total = 0;

  products: Product[] = [
    {
      id: '1',
      name: 'Juguete Saltarín',
      price: 50,
      image: './../assets/images/toy.png'
    },
    {
        id: '2',
        name: 'Jerry Peluche',
        price: 80,
        image: './../assets/images/jerry.png'
    },
    {
        id: '3',
        name: 'Bicicleta Maravilla',
        price: 300,
        image: './../assets/images/bike.png'
    },
    {
      id: '4',
      name: 'Libro Vivir de Las Fibras',
      price: 45,
      image: './../assets/images/libro.png'
  }
  ];


  onAddToShoppingCart(product: Product) {
    console.log(product);
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
