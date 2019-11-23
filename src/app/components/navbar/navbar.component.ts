import { Component, OnInit } from '@angular/core';
import { navBarService } from './navbar.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {
  constructor(public nav:navBarService ) {

  }


  ngOnInit() {
  }

}
