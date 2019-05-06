import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor() {
    this.subscription = this.observable()
    .pipe(
      retry(2)
    )
    .subscribe(
      resp => console.log('Pasa: ', resp),
      error => console.error('Error en la suscripcion', error),
      () => console.log('COMPLETED')
    )
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  observable(): Observable<any> {
    const obs = new Observable( (suscriptor: Subscriber<any>) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador ++;
        suscriptor.next(contador);
        if (contador === 4) {
          clearInterval(intervalo);
          suscriptor.complete();
        }
        // if (contador === 2 ) {
        //   clearInterval(intervalo);
        //   suscriptor.error('--- > Error al terminar las cuestiones');
        // }
      }, 1000);
    });
    return obs;
  }
}
