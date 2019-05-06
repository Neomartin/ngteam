import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [ ],
  providers: [ UserService ]
})
export class LoginComponent implements OnInit {
  public user: User;
  constructor(
    private _user: UserService,
    private router: Router
  ) {
    this.user = new User('', '', '', '', null, null, '');
   }

  ngOnInit() {
  }
  login() {
    console.log(this.user);
    this._user.login(this.user).subscribe( (resp:any) => {
      console.log(resp);
      if (resp.ok) {
        Swal.fire({
          type: 'success',
          title: 'Login correcto',
          text: 'Será redireccionado en unos segundos',
          footer: '<a href>NetGames &copy;</a>',
          showConfirmButton: false,
          timer: 1500
        })
        .then( () => this.router.navigate(['/dashboard']));
      }
    }, error => {
      console.log(error.error);
      Swal.fire({
        type: 'error',
        title: 'Login incorrecto',
        html: '<span class="text-danger">' + error.error.message + '</span>',
      })
    });
    
  }

  accountRecovery() {
    Swal.fire({
      title: 'Ingrese su correo electrónico.',
      // tslint:disable-next-line:max-line-length
      html: 'Se enviará un  <b class="text-danger">email </b> a la dirección que usted especifique ' + 
      'indicando como recuperar su contraseña, siempre y cuando la misma exista en nuestra base de datos.',
      type: 'info',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        console.log(this._user);
        this._user.login(this.user).subscribe( resp => {
          console.log(resp);
        });
      },

    })
  }
}
