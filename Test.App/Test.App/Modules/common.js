// { "$id":"1", "Message":"The request is invalid.", "ModelState":{ "$id":"2", "model.password":["The Password field is required."], "model.firstName":["The First name field is required."], "model.lastName":["The Last name field is required."], "model.email":["The Email field is required."], "model.phone":["The phone field is required."], "model.address1":["Mailing Address is required!"], "model.city":["City is required!"], "model.zipCode":["Zipcode/Postal Code is required!"], "model.subzoneId":["State/Province is required!"], "model.genderId":["Gender information is required!"], "model.countryId":["Country is required!"] } }
var Sidekick;
(function (Sidekick) {
    var ValidationResult = (function () {
        function ValidationResult() {
            this.ModelState = {};
        }
        ValidationResult.prototype.addValidationError = function (fieldName, errors) {
            this.ModelState[fieldName] = errors;
        };
        return ValidationResult;
    })();
    Sidekick.ValidationResult = ValidationResult;
})(Sidekick || (Sidekick = {}));
//# sourceMappingURL=common.js.map