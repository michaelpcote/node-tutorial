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
var class_service_1 = require("./class.service");
var forms_1 = require("@angular/forms");
var ClassComponent = (function () {
    function ClassComponent(classService, fb) {
        this.classService = classService;
        this.fb = fb;
        this.gradeLevels = ['K', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    }
    ClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classForm = this.fb.group({
            gradeLevel: '',
            weeksAvailable: ''
        });
        this.classService.getClasses()
            .subscribe(function (classes) { return _this.classes = classes; }, function (error) { return _this.errorMessage = error; });
    };
    return ClassComponent;
}());
ClassComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'class.component.html'
    }),
    __metadata("design:paramtypes", [class_service_1.ClassService,
        forms_1.FormBuilder])
], ClassComponent);
exports.ClassComponent = ClassComponent;
//# sourceMappingURL=class.component.js.map