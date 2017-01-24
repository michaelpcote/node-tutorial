"use strict";
var ApplicationDataService = (function () {
    function ApplicationDataService() {
    }
    ApplicationDataService.prototype.setApplication = function (application) {
        this.application = application;
    };
    ApplicationDataService.prototype.getApplication = function () {
        return this.application;
    };
    return ApplicationDataService;
}());
exports.ApplicationDataService = ApplicationDataService;
//# sourceMappingURL=application-data.service.js.map