import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { authJwt } from '../../login/auth/authJwt';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('appears', [
      transition(':enter', [
        style({ opacity: '0', transform: 'translateX(-5%)' }),
        animate('500ms ease-in-out'),
      ]),
    ]),
  ]
})
export class SidenavComponent implements OnInit {

  showFiller = true;
  drawerOpened: boolean = true
  contentMargin = 17;
  
  constructor(
    private authJwt: authJwt,
    public router: Router,
  ) { }

  ngOnInit(): void {
    if(!this.authJwt.getToken()) {
      this.rerouteToLogin()
    }
  }

  drawertoggle() {
    this.drawerOpened = !this.drawerOpened;
    if(!this.drawerOpened){
      this.contentMargin = 7;
    }else {
      this.contentMargin = 17;
    }
  }

  rerouteToLogin() {
    this.router.navigate([''])
  }

  logout() {
    this.authJwt.logout()
    this.rerouteToLogin()
  }
}
