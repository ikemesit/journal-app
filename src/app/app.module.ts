import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faArrowAltCircleLeft,
    faEyeSlash,
    faFile,
    faFolderOpen,
    faUser
} from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
    MainFooterComponent
} from './common/components/main-footer/main-footer.component';
import {
    MainHeaderComponent
} from './common/components/main-header/main-header.component';
import {
    PublicationCardComponent
} from './common/components/publication-card/publication-card.component';
import { PublicationService } from './common/services/publication/publication.service';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PublicationComponent } from './pages/publication/publication.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { PublicationCardRowComponent } from './common/components/publication-card-row/publication-card-row.component';

const COMPONENTS = [
  AppComponent,
  HomeComponent,
  MainHeaderComponent,
  AboutComponent,
  MainFooterComponent,
  PublicationComponent,
  LoginComponent,
  RegistrationComponent,
  PublicationCardComponent,
];

const SERVICES = [PublicationService];

const FAICONS = [
  faFile,
  faUser,
  faFolderOpen,
  faSearch,
  faEnvelope,
  faArrowAltCircleLeft,
  faEyeSlash,
];

@NgModule({
  declarations: [...COMPONENTS, PublicationCardRowComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [...SERVICES],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    library.add(...FAICONS);
  }
}
