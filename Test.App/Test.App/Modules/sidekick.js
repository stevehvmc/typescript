/// <reference path="libs/jquery.d.ts" />
/// <reference path="libs/angular.d.ts" />
/// <reference path="libs/angular.route.d.ts" />
'use strict';
var modules = ["app.controllers", "app.directives", "app.filters", "app.services"];
modules.forEach(function (module) { return angular.module(module, []); });
modules.push("ngRoute");
angular.module("Sidekick", modules);
var Sidekick;
(function (Sidekick) {
    // *** Modules need to be populated to be correctly defined, otherwise they will give warnings. null fixes this ***/
    var controllers;
    (function (controllers) {
        null;
    })(controllers = Sidekick.controllers || (Sidekick.controllers = {}));
    var directives;
    (function (directives) {
        null;
    })(directives = Sidekick.directives || (Sidekick.directives = {}));
    var filters;
    (function (filters) {
        null;
    })(filters = Sidekick.filters || (Sidekick.filters = {}));
    var services;
    (function (services) {
        null;
    })(services = Sidekick.services || (Sidekick.services = {}));
    /**
     * Register new controller.
     *
     * @param className
     * @param services
     */
    function registerController(className, controller, callback, services) {
        if (services === void 0) { services = []; }
        //var controller = className; //"app.controllers." + className;
        services.push(controller);
        angular.module("Sidekick").config(["$routeProvider", callback]);
        angular.module("app.controllers").controller(className, services);
    }
    Sidekick.registerController = registerController;
    /**
     * Register new filter.
     *
     * @param className
     * @param services
     */
    function registerFilter(className, services) {
        if (services === void 0) { services = []; }
        var filter = className.toLowerCase();
        services.push(function () { return (new Sidekick.filters[className]()).filter; });
        angular.module("app.filters").filter(filter, services);
    }
    Sidekick.registerFilter = registerFilter;
    /**
     * Register new directive.
     *
     * @param className
     * @param services
     */
    function registerDirective(className, services) {
        if (services === void 0) { services = []; }
        var directive = className[0].toLowerCase() + className.slice(1);
        services.push(function () { return new Sidekick.directives[className](); });
        angular.module("app.directives").directive(directive, services);
    }
    Sidekick.registerDirective = registerDirective;
    /**
     * Register new service.
     *
     * @param className
     * @param services
     */
    function registerService(className, services) {
        if (services === void 0) { services = []; }
        var service = className[0].toLowerCase() + className.slice(1);
        services.push(function () { return new Sidekick.services[className](); });
        angular.module("app.services").factory(service, services);
    }
    Sidekick.registerService = registerService;
})(Sidekick || (Sidekick = {}));
//# sourceMappingURL=sidekick.js.map