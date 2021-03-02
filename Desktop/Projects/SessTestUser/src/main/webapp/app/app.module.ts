import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SessTestUserSharedModule } from 'app/shared/shared.module';
import { SessTestUserCoreModule } from 'app/core/core.module';
import { SessTestUserAppRoutingModule } from './app-routing.module';
import { SessTestUserHomeModule } from './home/home.module';
import { SessTestUserEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SessTestUserSharedModule,
    SessTestUserCoreModule,
    SessTestUserHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SessTestUserEntityModule,
    SessTestUserAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class SessTestUserAppModule {}
