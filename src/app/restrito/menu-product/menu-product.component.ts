import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-menu-product',
  templateUrl: './menu-product.component.html',
  styleUrls: ['./menu-product.component.css']
})
export class MenuProductComponent {

  constructor(private _router: Router, private _loginService: LoginService) {}

  logout() {
    localStorage.clear();
    this._loginService.setMostraMenu(true);
    this._router.navigate(["/login"]);
  }
}
