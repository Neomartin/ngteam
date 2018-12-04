import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      title: 'Home',
      icon: 'mdi mdi-home',
      submenu: [
        { title: 'Dashboard', url: '/dashboard' }
      ]
    },
    {
      title: 'Productos',
      icon: 'mdi mdi-mouse',
      submenu: [
        { title: 'Añadir', url: '/add-product' },
        { title: 'Modificar', url: '/edit-product' },
        { title: 'Presupuestar', url: '/hola-product' }
      ]
    },
    {
      title: 'User',
      icon: 'mdi mdi-account',
      submenu: [
        { title: 'Perfil', url: '/user-profile' }
      ]
    }
  ]
  constructor() { }
}
