import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
//routes
import {APP_ROUTES} from './app.routes';

//services
import { HttpClientModule } from '@angular/common/http';
import { FlickrService } from './services/flickr.service';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AlbumComponent } from './components/album/album.component';

//external
import {SlideshowModule} from "ng-simple-slideshow";
import { PortafolioComponent } from './components/portafolio/portafolio.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    CarouselComponent,
    PortafolioComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SlideshowModule,
    RouterModule.forRoot( APP_ROUTES, { useHash: false } )
  ],
  providers: [
    FlickrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
