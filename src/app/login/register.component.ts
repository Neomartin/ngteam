import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
  providers: [ UserService ]
})
export class RegisterComponent implements OnInit {
  public user: User;
  public error2: Array<any> = [];
  constructor(
    private _user: UserService,
    private router: Router
  ) {
    this.user = new User('', '', '', '', null, null, '', '', null, '', '', null);
  }

  ngOnInit() {
  }

  registrar() {
    this.error2 = [];
    console.log(this.user);
    this._user.registrar(this.user).subscribe( (resp: any) => {
      console.log(resp);
      if (resp.ok) {
        Swal.fire({
          type: 'success',
          title: 'Registro correcto',
          text: resp.message,
          timer: 2000
          }).then(() => {
                this.router.navigate(['/login']);
              });
      } else {
        Swal.fire({
          type: 'error',
          title: 'No se pudo crear el usuario',
          text: resp.message,
          timer: 2000
          });
      }
    }, error => {
      const error1 = new Array();
      // tslint:disable-next-line:forin
      for (const key in error.error.errorsito.errors) {
        error1.push(error.error.errorsito.errors[key].message);
        this.error2.push(error.error.errorsito.errors[key].message);
      }
      Swal.fire({
        type: 'error',
        title: 'Error al crear usuario.',
        html: '<span class="capitalize"><p>' + error1[0] + '</p></span>',
        timer: 2000
      });
    });
  }
}
