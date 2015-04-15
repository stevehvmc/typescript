/// <reference path="libs/angular.d.ts" />
/// <reference path="sidekick.ts" />
var Sidekick;
(function (Sidekick) {
    var Registration;
    (function (Registration) {
        var Controllers;
        (function (Controllers) {
            //@Route("/home", "/home.html")
            var Home = (function () {
                function Home($scope) {
                    $scope.message = "hello, world";
                }
                return Home;
            })();
            Controllers.Home = Home;
            //@Route("/profile", "/view.html")
            var Profile = (function () {
                function Profile($scope) {
                    $scope.message = "hello, world";
                    $scope.clickMe = function () {
                        alert('clicked');
                    };
                }
                return Profile;
            })();
            Controllers.Profile = Profile;
        })(Controllers = Registration.Controllers || (Registration.Controllers = {}));
    })(Registration = Sidekick.Registration || (Sidekick.Registration = {}));
})(Sidekick || (Sidekick = {}));
Sidekick.registerController("Sidekick.Registration.Controllers.Home", Sidekick.Registration.Controllers.Home, function ($routeProvider) {
    $routeProvider.when("/home", { controller: "Sidekick.Registration.Controllers.Home", templateUrl: "/modules/views/registration/home.html" }).otherwise({ redirectTo: "/home" });
}, ["$scope"]);
Sidekick.registerController("Sidekick.Registration.Controllers.Profile", Sidekick.Registration.Controllers.Profile, function ($routeProvider) {
    $routeProvider.when("/profile", { controller: "Sidekick.Registration.Controllers.Profile", templateUrl: "/modules/views/registration/profile.html" });
}, ["$scope"]);
//# sourceMappingURL=registration.js.map