import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  @Output() changeNav = new EventEmitter<boolean>();

  //navBar: boolean = true;
  constructor() {
    this.showNav();
  }
  showNav() {
   this.changeNav.emit(false);
   console.log("login");
  }
  ngOnInit() {
  }

}
