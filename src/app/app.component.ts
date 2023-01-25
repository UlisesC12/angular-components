import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = ''; //https://www.w3schools.com/howto/img_avatar.png

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

  onLoaded(img: string) {
    console.log('log padre, ', img);
  }
}
