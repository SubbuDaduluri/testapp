import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SpMicroSharedModule } from 'app/shared/shared.module';
import { SpMicroCoreModule } from 'app/core/core.module';
import { SpMicroAppRoutingModule } from './app-routing.module';
import { SpMicroHomeModule } from './home/home.module';
import { SpMicroEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SpMicroSharedModule,
    SpMicroCoreModule,
    SpMicroHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SpMicroEntityModule,
    SpMicroAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class SpMicroAppModule {}
