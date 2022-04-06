import { Component } from '@angular/core';
import { User } from './models/user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DekraTest';

  users: User[] = [{
    id: 1,
    name: 'Eugenio',
    surname1: 'Páez',
    surname2: 'Casado',
    username: 'geniux14',
    active: true,
    age: 29,
    email: 'eugenio_8778@hotmail.com',
    creationDate: new Date(),
    lastLoggin: new Date()
  }]

  constructor() {
    localStorage.setItem('users', JSON.stringify(this.users))
  }
}
