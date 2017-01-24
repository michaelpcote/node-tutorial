"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var class_service_1 = require("./classes/class.service");
var application_service_1 = require("./application/application.service");
var application_data_service_1 = require("./application/application-data.service");
var class_filter_pipe_1 = require("./classes/class-filter.pipe");
var app_component_1 = require("./app.component");
var landing_component_1 = require("./home/landing.component");
var about_component_1 = require("./about/about.component");
var class_component_1 = require("./classes/class.component");
var application_component_1 = require("./application/application.component");
var contact_us_component_1 = require("./contact/contact-us.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'home', component: landing_component_1.LandingComponent },
                { path: 'about', component: about_component_1.AboutComponent },
                { path: 'courses', component: class_component_1.ClassComponent },
                { path: 'apply', component: application_component_1.ApplicationComponent },
                { path: 'contact-us', component: contact_us_component_1.ContactUsComponent },
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ]),
        ],
        declarations: [
            app_component_1.AppComponent,
            landing_component_1.LandingComponent,
            about_component_1.AboutComponent,
            class_component_1.ClassComponent,
            application_component_1.ApplicationComponent,
            contact_us_component_1.ContactUsComponent,
            class_filter_pipe_1.ClassFilterPipe
        ],
        providers: [
            class_service_1.ClassService,
            application_service_1.ApplicationService,
            application_data_service_1.ApplicationDataService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map