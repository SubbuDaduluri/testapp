import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SessionTestSpringSharedModule } from 'app/shared/shared.module';
import { SessionTestSpringCoreModule } from 'app/core/core.module';
import { SessionTestSpringAppRoutingModule } from './app-routing.module';
import { SessionTestSpringHomeModule } from './home/home.module';
import { SessionTestSpringEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SessionTestSpringSharedModule,
    SessionTestSpringCoreModule,
    SessionTestSpringHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SessionTestSpringEntityModule,
    SessionTestSpringAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class SessionTestSpringAppModule {}
