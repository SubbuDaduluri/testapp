import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SessionSharedModule } from 'app/shared/shared.module';
import { SessionCoreModule } from 'app/core/core.module';
import { SessionAppRoutingModule } from './app-routing.module';
import { SessionHomeModule } from './home/home.module';
import { SessionEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SessionSharedModule,
    SessionCoreModule,
    SessionHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SessionEntityModule,
    SessionAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class SessionAppModule {}
