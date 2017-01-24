"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ClassFilterPipe = (function () {
    function ClassFilterPipe() {
    }
    ClassFilterPipe.prototype.transform = function (value, filterBy) {
        var _this = this;
        if (filterBy) {
            filterBy = filterBy.valueOf();
            var maxGrade = this.gradeLevel(filterBy);
        }
        return filterBy ? value.filter(function (classs) {
            return _this.classAvailable(maxGrade, classs);
        }) : value;
    };
    ClassFilterPipe.prototype.gradeLevel = function (level) {
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
    ClassFilterPipe.prototype.classAvailable = function (level, classs) {
        if (classs.gradeLevel[level].weeksAvailable.length !== 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return ClassFilterPipe;
}());
ClassFilterPipe = __decorate([
    core_1.Pipe({
        name: 'classFilter'
    })
], ClassFilterPipe);
exports.ClassFilterPipe = ClassFilterPipe;
//# sourceMappingURL=class-filter.pipe.js.map