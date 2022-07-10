import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SohoComponentsModule, SohoRenderLoopService } from 'ids-enterprise-ng';

import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { SohoLocaleInitializerModule } from './locale/soho-locale-initializer.module';

import { HeaderTabsDemoComponent } from './header/header-tabs.demo';
import { HeaderToggleButtonsDemoComponent } from './header/header-toggle-buttons.demo';
import { HeaderToolbarAndTabsDemoComponent } from './header/header-toolbar-and-tabs.demo';
import { HeaderToolbarDemoComponent } from './header/header-toolbar.demo';
import { SohoHeaderDynamicDemoComponent } from './header/header-dynamic.demo';

import { ApplicationMenuDemoComponent } from './application-menu/application-menu.demo';
import { ApplicationMenuLazyDemoComponent } from './application-menu/application-menu-lazy.demo';
import { ApplicationMenuLazyMenuDemoComponent } from './application-menu/application-menu-lazy-menu.demo';
import { ApplicationMenuLazyService } from './application-menu/application-menu-lazy-service.demo';
import { ApplicationMenuRoleSwitcherDemoComponent } from './application-menu/application-menu-roleswitcher.demo';
import { PersonalizeMenuComponent } from './personalize-menu/personalize-menu.component';
import { SohoMastheadDemoComponent } from './masthead/masthead.demo';

import { AboutDemoComponent } from './about/about.demo';

import { HomePageDemoComponent } from './homepage/homepage.demo';
import { OccupancyComponent } from './statistics/occupancy/occupancy.component';


@NgModule({
  declarations: [
    AppComponent,
	AboutDemoComponent,
	HeaderTabsDemoComponent,
	HeaderToggleButtonsDemoComponent,
	HeaderToolbarAndTabsDemoComponent,
	HeaderToolbarDemoComponent,
	SohoHeaderDynamicDemoComponent,
	ApplicationMenuDemoComponent,
	SohoMastheadDemoComponent,
	PersonalizeMenuComponent,
	HomePageDemoComponent,
	OccupancyComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SohoComponentsModule,
    SohoLocaleInitializerModule,
	
  ],
  providers: [
   ApplicationMenuLazyService,
   SohoRenderLoopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
