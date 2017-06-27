import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';

// Platform and Environment providers/directives/pipes
import { ROUTES } from './app.routes';

// App is our top level component
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
  ]
})
export class AppModule {
  constructor(
  ) {}
}
