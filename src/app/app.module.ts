import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRouteModule } from './app.routing';

import { IndexComponent } from './components/index/index.component';
import { FlexComponent } from './components/flex/flex.component';

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        FlexComponent
    ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        AppRouteModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
