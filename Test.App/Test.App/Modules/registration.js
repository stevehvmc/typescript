/// <reference path="libs/angular.d.ts" />
/// <reference path="common.ts" />
var Sidekick;
(function (Sidekick) {
    var Registration;
    (function (Registration) {
        var Controllers;
        (function (Controllers) {
            var ProfileController = (function () {
                function ProfileController($scope, profileService) {
                    $scope.validate = function () {
                        var json = ' { "$id":"1", "Message":"The request is invalid.", "ModelState":{ "$id":"2", "model.password":["The Password field is required."], "model.firstName":["The First name field is required."], "model.lastName":["The Last name field is required."], "model.email":["The Email field is required."], "model.phone":["The phone field is required."], "model.address1":["Mailing Address is required!"], "model.city":["City is required!"], "model.zipCode":["Zipcode/Postal Code is required!"], "model.subzoneId":["State/Province is required!"], "model.genderId":["Gender information is required!"], "model.countryId":["Country is required!"] } } ';
                        $scope.ValidationResult = JSON.parse(json);
                    };
                    $scope.remove = function () {
                        $scope.isEditing = false;
                    };
                    $scope.load = function (id) {
                        $scope.isEditing = true;
                        profileService.getProfile(id).then(function (data) { return $scope.model = data; });
                    };
                    $scope.save = function () {
                        $scope.isEditing = false;
                    };
                }
                return ProfileController;
            })();
            Controllers.ProfileController = ProfileController;
        })(Controllers = Registration.Controllers || (Registration.Controllers = {}));
    })(Registration = Sidekick.Registration || (Sidekick.Registration = {}));
})(Sidekick || (Sidekick = {}));
var Sidekick;
(function (Sidekick) {
    var Registration;
    (function (Registration) {
        var Services;
        (function (Services) {
            var ProfileService = (function () {
                function ProfileService($http) {
                    this.$http = $http;
                }
                ProfileService.prototype.getProfile = function (id) {
                    return this.$http.get("/data/profile.json").then(function (response) {
                        return response.data;
                    });
                };
                ProfileService.$inject = ["$http"];
                return ProfileService;
            })();
            Services.ProfileService = ProfileService;
        })(Services = Registration.Services || (Registration.Services = {}));
    })(Registration = Sidekick.Registration || (Sidekick.Registration = {}));
})(Sidekick || (Sidekick = {}));
angular.module("Sidekick.Registration", ["ngRoute"]).config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/profile", {
        templateUrl: "/modules/views/registration/profile.html",
        controller: Sidekick.Registration.Controllers.ProfileController
    });
}]).service("profileService", Sidekick.Registration.Services.ProfileService);
//# sourceMappingURL=registration.js.map