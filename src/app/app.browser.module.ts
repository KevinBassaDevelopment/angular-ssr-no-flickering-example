import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';


export function appInitializerFactory() {
  return () => {
    return new Promise((resolve, reject) => {
      console.log('APP_INITIALIZER');
      resolve();
      /*
      return setTimeout(() => {
        console.log('APP_INITIALIZER after timeout');
        resolve();
      }, 10000);*/
    });
  };
}

@NgModule({
  entryComponents: [],
  imports: [
    BrowserModule.withServerTransition({ appId: 'app' }),
    AppModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {}
