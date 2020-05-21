import { Component, Inject, PLATFORM_ID } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public isBrowser = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    console.log('AppComponent constructor');
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
    }
  }

}
