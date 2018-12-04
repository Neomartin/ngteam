import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Dolar } from 'src/app/models/dolar';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  providers: [ProductService]
})
export class DolarComponent implements OnInit {
  @Output() valorDolar: EventEmitter<Dolar> = new EventEmitter;
  dolar: Dolar;
  constructor(
    private _product: ProductService
  ) {  }

  ngOnInit() {
    this.getDolar();
    console.log('Dolar component loaded...');
  }
  dolarChange( event) {
    if (event < 0) {
      this.dolar.dolar = 1;
    }
    this.valorDolar.emit(this.dolar);
  }
  getDolar() {
    this._product.getDolar().subscribe(dolar => {
      // console.log(dolar);
      // console.log(typeof(dolar));
      this.dolar = dolar;
      this.valorDolar.emit(this.dolar);
    }, err => {
      console.log('Error al obtener dolar ', err);
    });
  }
}

