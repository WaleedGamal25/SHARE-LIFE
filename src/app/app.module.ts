import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BtnComponent } from './btn/btn.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TermComponent } from './term/term.component';
import { DonorComponent } from './donor/donor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    BtnComponent,
    TermComponent,
    DonorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CarouselModule,
    RouterModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
