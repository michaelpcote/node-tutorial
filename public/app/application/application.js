"use strict";
var Application = (function () {
    function Application(parentFirstName, parentLastName, parentEmail, parentPhone, childFirstName, childLastName, classes, gradeLevel, peronsalStatement) {
        if (parentFirstName === void 0) { parentFirstName = ''; }
        if (parentLastName === void 0) { parentLastName = ''; }
        if (parentEmail === void 0) { parentEmail = ''; }
        if (parentPhone === void 0) { parentPhone = ''; }
        if (childFirstName === void 0) { childFirstName = ''; }
        if (childLastName === void 0) { childLastName = ''; }
        this.parentFirstName = parentFirstName;
        this.parentLastName = parentLastName;
        this.parentEmail = parentEmail;
        this.parentPhone = parentPhone;
        this.childFirstName = childFirstName;
        this.childLastName = childLastName;
        this.classes = classes;
        this.gradeLevel = gradeLevel;
        this.peronsalStatement = peronsalStatement;
    }
    return Application;
}());
exports.Application = Application;
//# sourceMappingURL=application.js.map