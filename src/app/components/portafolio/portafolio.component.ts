import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { map } from 'rxjs/operators';
import { FlickrService } from '../../services/flickr.service';
import {Albums} from '../models';
import { navBarService } from '../navbar/navbar.service';
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioDirectoryComponent implements OnInit {
  id:string;
  title: string;
  albums: Albums[] = [];
  // albumIds: any = {};
  constructor(private router: ActivatedRoute, private flickr: FlickrService, public navBarService: navBarService) {
    this.router.params.subscribe( params =>{
      this.id = params['id']
    });
    this.albums = this.flickr.getAlbumsFormat(this.id);
    console.log(this.albums);
   }

   getCollection(id: string){
   }

  ngOnInit() {
    this.navBarService.show();
  }

}
