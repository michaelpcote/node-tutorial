import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ClassService } from './classes/class.service';
import { ApplicationService } from './application/application.service';
import { ApplicationDataService } from './application/application-data.service';

import { ClassFilterPipe } from './classes/class-filter.pipe';

import { AppComponent }  from './app.component';
import { LandingComponent } from './home/landing.component';
import { AboutComponent } from './about/about.component';
import { ClassComponent } from './classes/class.component';
import { ApplicationComponent } from './application/application.component';
import { ContactUsComponent } from './contact/contact-us.component';

@NgModule({
  imports: [ 
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: LandingComponent },
      { path: 'about', component: AboutComponent },
      { path: 'courses', component: ClassComponent },
      { path: 'apply', component: ApplicationComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
  ],
  declarations: [ 
    AppComponent,
    LandingComponent,
    AboutComponent,
    ClassComponent,
    ApplicationComponent,
    ContactUsComponent,
    ClassFilterPipe
  ],
  providers: [
    ClassService,
    ApplicationService,
    ApplicationDataService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
