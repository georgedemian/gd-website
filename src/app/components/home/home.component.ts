import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../../services/flickr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  navBar: boolean;
  constructor( private flickr: FlickrService) {
    this.navBar = true;

   }
  ngOnInit() {
  }

}
