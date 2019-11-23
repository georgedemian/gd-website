import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FlickrService } from '../../services/flickr.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { navBarService } from '../navbar/navbar.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor( private flickr: FlickrService, public navBarService: navBarService) {
    
  }

  ngOnInit() {
    this.navBarService.hide();
  }

}
