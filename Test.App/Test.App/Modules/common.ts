
// { "$id":"1", "Message":"The request is invalid.", "ModelState":{ "$id":"2", "model.password":["The Password field is required."], "model.firstName":["The First name field is required."], "model.lastName":["The Last name field is required."], "model.email":["The Email field is required."], "model.phone":["The phone field is required."], "model.address1":["Mailing Address is required!"], "model.city":["City is required!"], "model.zipCode":["Zipcode/Postal Code is required!"], "model.subzoneId":["State/Province is required!"], "model.genderId":["Gender information is required!"], "model.countryId":["Country is required!"] } }

interface IDictionary<T> {
    [index: string]: T[];
}

module Sidekick {
    export class ValidationResult {
        Message: string;
        ModelState: IDictionary<string>

        constructor() {
            this.ModelState = {};
        }

        addValidationError(fieldName: string, errors: string[]) {
            this.ModelState[fieldName] = errors;
        }
    }

    export interface IDataService<T> {
        model: T;
        save(): void;
        load(id: number): void;
        remove(): void;
        isEditing: boolean;
        validate(): void;
        ValidationResult: Sidekick.ValidationResult;
    }
}