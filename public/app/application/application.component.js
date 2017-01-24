"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var Subscription_1 = require("rxjs/Subscription");
var class_service_1 = require("../classes/class.service");
var application_service_1 = require("./application.service");
var application_data_service_1 = require("./application-data.service");
var ApplicationComponent = (function () {
    function ApplicationComponent(fb, _router, classService, applicationService, applicationDataService) {
        this.fb = fb;
        this._router = _router;
        this.classService = classService;
        this.applicationService = applicationService;
        this.applicationDataService = applicationDataService;
        this.gradeLevels = ['K', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        this.weeks = [['1', '2', '3', '4', '5', '6']];
        this.sub = Subscription_1.Subscription;
    }
    Object.defineProperty(ApplicationComponent.prototype, "classArray", {
        get: function () {
            return this.applicationForm.get('classArray');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationComponent.prototype, "child", {
        get: function () {
            return this.applicationForm.get('child');
        },
        enumerable: true,
        configurable: true
    });
    ApplicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.applicationForm = this.fb.group({
            parentFirstName: ['', [forms_1.Validators.required]],
            parentLastName: ['', [forms_1.Validators.required]],
            parentEmail: ['', [forms_1.Validators.required, forms_1.Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+")]],
            parentPhone: ['', [forms_1.Validators.required]],
            child: this.fb.array([this.buildChild()]),
            classArray: this.fb.array([this.buildClasses()])
        });
        this.classService.getClasses()
            .subscribe(function (classes) { return _this.classes = classes; }, function (error) { return _this.errorMessage = error; });
    };
    ApplicationComponent.prototype.buildChild = function () {
        return this.fb.group({
            childFirstName: ['', [forms_1.Validators.required]],
            childLastName: ['', [forms_1.Validators.required]],
            personalStatement: ['', forms_1.Validators.required]
        });
    };
    ApplicationComponent.prototype.addChild = function () {
        this.child.push(this.buildChild());
    };
    ApplicationComponent.prototype.removeChild = function (index) {
        var control = this.applicationForm.controls['child'];
        control.removeAt(index);
    };
    ApplicationComponent.prototype.buildClasses = function () {
        return this.fb.group({
            classWeek: ['', forms_1.Validators.required],
            classId: ['', forms_1.Validators.required],
            gradeLevel: ['', forms_1.Validators.required]
        });
    };
    ApplicationComponent.prototype.addClass = function () {
        this.weeks.push(['1', '2', '3', '4', '5', '6']);
        this.classArray.push(this.buildClasses());
    };
    ApplicationComponent.prototype.removeClass = function (index) {
        this.weeks.splice(index, 1);
        var control = this.applicationForm.controls['classArray'];
        control.removeAt(index);
    };
    ApplicationComponent.prototype.selectionMade = function (index) {
        var i = 0, length = this.classes.length, level, classId;
        if (this.applicationForm.value.classArray[index].classId !== '' && this.applicationForm.value.classArray[index].gradeLevel !== '') {
            level = this.gradeLevel(this.applicationForm.value.classArray[index].gradeLevel);
            classId = this.applicationForm.value.classArray[index].classId;
            for (i; i < length; i++) {
                if (this.classes[i].classId === classId) {
                    this.weeks[index] = this.classes[i].gradeLevel[level].weeksAvailable;
                }
            }
        }
    };
    ApplicationComponent.prototype.submit = function () {
        this.applicationDataService.setApplication(this.applicationForm.value);
        this.applicationService.submitApplication(this.applicationForm.value)
            .subscribe();
        console.log(this.applicationForm);
        console.log('Saved: ' + JSON.stringify(this.applicationForm.value));
    };
    ApplicationComponent.prototype.gradeLevel = function (level) {
        if (level <= 2) {
            return "second";
        }
        else if (level <= 5) {
            return "fifth";
        }
        else {
            return "nineth";
        }
    };
    return ApplicationComponent;
}());
ApplicationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'application.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        class_service_1.ClassService,
        application_service_1.ApplicationService,
        application_data_service_1.ApplicationDataService])
], ApplicationComponent);
exports.ApplicationComponent = ApplicationComponent;
//# sourceMappingURL=application.component.js.map