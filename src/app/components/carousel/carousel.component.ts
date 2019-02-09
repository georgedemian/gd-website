import { Component, OnInit } from '@angular/core';
import { FlickrService } from "../../services/flickr.service";
import {SlideshowModule} from "ng-simple-slideshow";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  popularImages: any[] = [];
  height: string = '100%';
  showArrows: boolean = false;
  disableSwiping: boolean = true;
  autoPlay: boolean = true;
  autoPlayInterval: number = 20000;
  stopAutoPlayOnSlide: boolean = false;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = false;
  showCaptions: boolean = false;
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  constructor( private flickr: FlickrService ) {


    this.flickr.getPopular()
    .subscribe( (data: any) => {
      this.popularImages = data;

      for (let photo of this.popularImages) {
          let url: string = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
          photo.url = url;
      }
      console.log(this.popularImages);
    })
  }

  ngOnInit() {
  }

}
