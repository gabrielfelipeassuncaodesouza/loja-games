import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mostraMenu = new Subject<boolean>();

  constructor() { }

  login(user: string, password: string): void {
    if(user == "gabriel" && password == "felipe") {
      localStorage.setItem('token', 'qwerty1234');
      this.mostraMenu.next(false);
    }
    else {
      this.mostraMenu.next(true);
    }
  }

  setMostraMenu(value: boolean) {
    this.mostraMenu.next(value);
  }

  getMostraMenu() {
    return this.mostraMenu.asObservable();
  }
}
