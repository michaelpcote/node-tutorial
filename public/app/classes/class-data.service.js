"use strict";
var ClassDataService = (function () {
    function ClassDataService() {
        this.iclass = [];
    }
    ClassDataService.prototype.setClass = function (classs) {
        this.iclass = classs;
    };
    ClassDataService.prototype.getClass = function () {
        return this.iclass;
    };
    return ClassDataService;
}());
exports.ClassDataService = ClassDataService;
//# sourceMappingURL=class-data.service.js.map