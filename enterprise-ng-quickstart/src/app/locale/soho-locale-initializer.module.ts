import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule, PlatformLocation, APP_BASE_HREF } from '@angular/common';
import {
  SohoLocaleInitializerFactory,
  SohoLocaleInitializerService
} from './soho-locale-initializer.service';

/**
 * This function is used internally to get a string instance of the `<base href="" />` value from `index.html`.
 * This is an exported function, instead of a private function or inline lambda, to prevent this error:
 *
 * `Error encountered resolving symbol values statically.`
 * `Function calls are not supported.`
 * `Consider replacing the function or lambda with a reference to an exported function.`
 *
 * @param platformLocation an Angular service used to interact with a browser's URL
 * @return a string instance of the `<base href="" />` value from `index.html`
 */
export function getBaseHref(platformLocation: PlatformLocation): string {
  return platformLocation.getBaseHrefFromDOM();
}

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: SohoLocaleInitializerFactory,
      deps: [SohoLocaleInitializerService],
      multi: true
    },
    {
      provide: APP_BASE_HREF,
      useFactory: getBaseHref,
      deps: [PlatformLocation]
    }
  ]
})
export class SohoLocaleInitializerModule {}
