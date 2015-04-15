/// <reference path="libs/jquery.d.ts" />
/// <reference path="libs/angular.d.ts" />
/// <reference path="libs/angular.route.d.ts" />

'use strict';

var modules = ["app.controllers", "app.directives", "app.filters", "app.services"];
modules.forEach((module) => angular.module(module, []));

modules.push("ngRoute");

angular.module("Sidekick", modules);

module Sidekick {

    // *** Modules need to be populated to be correctly defined, otherwise they will give warnings. null fixes this ***/
    export module controllers { null; }
    export module directives { null; }
    export module filters { null; }
    export module services { null; }

    export interface IController {}
    export interface IDirective {
        restrict: string;
        link($scope: ng.IScope, element: JQuery, attrs: ng.IAttributes): any;
    }
    export interface IFilter {
        filter(input: any, ...args: any[]): any;
    }
    export interface IService { }

    /**
     * Register new controller.
     *
     * @param className
     * @param services
     */
    export function registerController(className: string, controller: Sidekick.IController, callback: ($routeProvider: ng.route.IRouteProvider) => void, services = []) {
        //var controller = className; //"app.controllers." + className;
        services.push(controller);
        angular.module("Sidekick").config(["$routeProvider", callback]);
        angular.module("app.controllers").controller(className, services);
    }

    /**
     * Register new filter.
     *
     * @param className
     * @param services
     */
    export function registerFilter(className: string, services = []) {
        var filter = className.toLowerCase();
        services.push(() => (new Sidekick.filters[className]()).filter);
        angular.module("app.filters").filter(filter, services);
    }

    /**
     * Register new directive.
     *
     * @param className
     * @param services
     */
    export function registerDirective(className: string, services = []) {
        var directive = className[0].toLowerCase() + className.slice(1);
        services.push(() => new Sidekick.directives[className]());
        angular.module("app.directives").directive(directive, services);
    }

    /**
     * Register new service.
     *
     * @param className
     * @param services
     */
    export function registerService(className: string, services = []) {
        var service = className[0].toLowerCase() + className.slice(1);
        services.push(() => new Sidekick.services[className]());
        angular.module("app.services").factory(service, services);
    }
}

