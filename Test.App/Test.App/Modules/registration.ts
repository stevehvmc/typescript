/// <reference path="libs/angular.d.ts" />
/// <reference path="common.ts" />

module Sidekick.Registration.Controllers {
    export class ProfileController {
        constructor($scope: Sidekick.IDataService<Sidekick.Registration.Models.IProfile>, profileService: Sidekick.Registration.Services.ProfileService) {
            $scope.validate = function () {
                var json = ' { "$id":"1", "Message":"The request is invalid.", "ModelState":{ "$id":"2", "model.password":["The Password field is required."], "model.firstName":["The First name field is required."], "model.lastName":["The Last name field is required."], "model.email":["The Email field is required."], "model.phone":["The phone field is required."], "model.address1":["Mailing Address is required!"], "model.city":["City is required!"], "model.zipCode":["Zipcode/Postal Code is required!"], "model.subzoneId":["State/Province is required!"], "model.genderId":["Gender information is required!"], "model.countryId":["Country is required!"] } } ';
                $scope.ValidationResult = <Sidekick.ValidationResult>JSON.parse(json);
            };

            $scope.remove = function () {
                $scope.isEditing = false;
            };

            $scope.load = function (id) {
                $scope.isEditing = true;
                profileService.getProfile(id).then((data) => $scope.model = data);
            };

            $scope.save = function () {
                $scope.isEditing = false;
            };
        }        
    }
}

module Sidekick.Registration.Services {
    export class ProfileService {
        static $inject = ["$http"];
        private $http: ng.IHttpService;

        constructor($http: ng.IHttpService) {
            this.$http = $http;
        }

        getProfile(id: number): ng.IPromise<Sidekick.Registration.Models.IProfile> {
            return this.$http.get("/data/profile.json").then((response) => {
                return response.data;
            });
        }
    }
}

module Sidekick.Registration.Models {
    export interface IProfile {
        id: number;
        firstName: string;
        lastName: string;
    }
}

angular.module("Sidekick.Registration", ["ngRoute"])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/profile", {
                templateUrl: "/modules/views/registration/profile.html",
                controller: Sidekick.Registration.Controllers.ProfileController
            })
        ;
    }])
    .service("profileService", Sidekick.Registration.Services.ProfileService)
;    