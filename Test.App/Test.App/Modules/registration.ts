/// <reference path="libs/angular.d.ts" />
/// <reference path="sidekick.ts" />
module Sidekick.Registration.Controllers {
    @Route("/home", "/home.html")
    export class Home implements IController {
        constructor($scope) {
            $scope.message = "hello, world";
        }
    }

    @Route("/profile", "/view.html")
    export class Profile implements IController {
        constructor($scope) {
            $scope.message = "hello, world";
            $scope.clickMe = function () {
                alert('clicked');
            };
        }
    }
}

Sidekick.registerController("Sidekick.Registration.Controllers.Home", Sidekick.Registration.Controllers.Home, ($routeProvider) => {
    $routeProvider
        .when("/home", { controller: "Sidekick.Registration.Controllers.Home", templateUrl: "/modules/views/registration/home.html" })
        .otherwise({ redirectTo: "/home" });
}, ["$scope"]);

Sidekick.registerController("Sidekick.Registration.Controllers.Profile", Sidekick.Registration.Controllers.Profile,($routeProvider) => {
    $routeProvider
        .when("/profile", { controller: "Sidekick.Registration.Controllers.Profile", templateUrl: "/modules/views/registration/profile.html" })
}, ["$scope"]);
