import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { KeycloackSpringAngularSharedModule } from 'app/shared/shared.module';
import { KeycloackSpringAngularCoreModule } from 'app/core/core.module';
import { KeycloackSpringAngularAppRoutingModule } from './app-routing.module';
import { KeycloackSpringAngularHomeModule } from './home/home.module';
import { KeycloackSpringAngularEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    KeycloackSpringAngularSharedModule,
    KeycloackSpringAngularCoreModule,
    KeycloackSpringAngularHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    KeycloackSpringAngularEntityModule,
    KeycloackSpringAngularAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class KeycloackSpringAngularAppModule {}
