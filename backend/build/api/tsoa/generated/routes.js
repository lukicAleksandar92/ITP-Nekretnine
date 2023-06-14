"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = void 0;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const AgencijeController_1 = require("./../../routes/agencije/AgencijeController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const HelloWorldController_1 = require("./../../routes/helloWorld/HelloWorldController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const ListingController_1 = require("./../../routes/listings/ListingController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const UserController_1 = require("./../../routes/users/UserController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "Agencije": {
        "dataType": "refObject",
        "properties": {
            "naziv": { "dataType": "string", "required": true },
            "adresa": { "dataType": "string", "required": true },
            "grad": { "dataType": "string", "required": true },
            "telefon": { "dataType": "double", "required": true },
            "PIB": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FlattenMaps_T_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": {}, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Document_any.any.any_": {
        "dataType": "refAlias",
        "type": { "ref": "FlattenMaps_T_", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Slika": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "source": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Listing": {
        "dataType": "refObject",
        "properties": {
            "lokacija": { "dataType": "string", "required": true },
            "ulica": { "dataType": "string", "required": true },
            "nazivOglasa": { "dataType": "string", "required": true },
            "tipNekretnine": { "dataType": "string", "required": true },
            "cena": { "dataType": "double", "required": true },
            "kvadratura": { "dataType": "double", "required": true },
            "brojSoba": { "dataType": "double", "required": true },
            "godinaIzgradnje": { "dataType": "double", "required": true },
            "stanjeNekretnine": { "dataType": "string", "required": true },
            "tipGrejanja": { "dataType": "string", "required": true },
            "sprat": { "dataType": "double", "required": true },
            "ukupnaSpratnost": { "dataType": "double", "required": true },
            "mesecneRezije": { "dataType": "double", "required": true },
            "karakteristike": { "dataType": "array", "array": { "dataType": "string" }, "required": true },
            "linije": { "dataType": "array", "array": { "dataType": "string" }, "required": true },
            "opis": { "dataType": "string", "required": true },
            "slike": { "dataType": "array", "array": { "dataType": "refObject", "ref": "Slika" }, "required": true },
            "datumIzmene": { "dataType": "union", "subSchemas": [{ "dataType": "datetime" }, { "dataType": "undefined" }], "required": true },
            "datumProdaje": { "dataType": "union", "subSchemas": [{ "dataType": "datetime" }, { "dataType": "undefined" }], "required": true },
            "status": { "dataType": "string", "required": true },
            "oglasivac": { "dataType": "string", "required": true },
            "tipOglasivaca": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ObjectId": {
        "dataType": "refAlias",
        "type": { "dataType": "string", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AverageValueId": {
        "dataType": "refObject",
        "properties": {
            "lokacija": { "dataType": "string", "required": true },
            "tip": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AverageValue": {
        "dataType": "refObject",
        "properties": {
            "_id": { "ref": "AverageValueId", "required": true },
            "srednjaVrednost": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateResult": {
        "dataType": "refObject",
        "properties": {
            "acknowledged": { "dataType": "boolean", "required": true },
            "matchedCount": { "dataType": "double", "required": true },
            "modifiedCount": { "dataType": "double", "required": true },
            "upsertedCount": { "dataType": "double", "required": true },
            "upsertedId": { "ref": "ObjectId", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SearchCriteria": {
        "dataType": "refObject",
        "properties": {
            "lokacija": { "dataType": "array", "array": { "dataType": "string" }, "default": [] },
            "tip": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "undefined" }] },
            "cenaOd": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "undefined" }] },
            "cenaDo": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "undefined" }] },
            "kvadraturaOd": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "undefined" }] },
            "kvadraturaDo": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "undefined" }] },
            "brojSobaOd": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "undefined" }] },
            "brojSobaDo": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "undefined" }] },
            "godinaIzgradnjeOd": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "undefined" }] },
            "godinaIzgradnjeDo": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "undefined" }] },
            "tipOglasivaca": { "dataType": "array", "array": { "dataType": "string" }, "default": [] },
            "stanjeNekretnine": { "dataType": "array", "array": { "dataType": "string" }, "default": [] },
            "tipGrejanja": { "dataType": "array", "array": { "dataType": "string" }, "default": [] },
            "spratOd": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "undefined" }] },
            "spratDo": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "undefined" }] },
            "mesecneRezijeOd": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "undefined" }] },
            "mesecneRezijeDo": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "undefined" }] },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "User": {
        "dataType": "refObject",
        "properties": {
            "ime": { "dataType": "string", "required": true },
            "prezime": { "dataType": "string", "required": true },
            "datumRodjenja": { "dataType": "string", "required": true },
            "grad": { "dataType": "string", "required": true },
            "telefon": { "dataType": "double", "required": true },
            "email": { "dataType": "string", "required": true },
            "kor_ime": { "dataType": "string", "required": true },
            "lozinka": { "dataType": "string", "required": true },
            "tip": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new runtime_1.ValidationService(models);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.get('/agencije/getAll', ...((0, runtime_1.fetchMiddlewares)(AgencijeController_1.AgencijeController)), ...((0, runtime_1.fetchMiddlewares)(AgencijeController_1.AgencijeController.prototype.getAllListings)), function AgencijeController_getAllListings(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new AgencijeController_1.AgencijeController();
            const promise = controller.getAllListings.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/helloWorld/message', ...((0, runtime_1.fetchMiddlewares)(HelloWorldController_1.HelloWorldController)), ...((0, runtime_1.fetchMiddlewares)(HelloWorldController_1.HelloWorldController.prototype.getHelloWorldMessage)), function HelloWorldController_getHelloWorldMessage(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new HelloWorldController_1.HelloWorldController();
            const promise = controller.getHelloWorldMessage.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/listings/insert', ...((0, runtime_1.fetchMiddlewares)(ListingController_1.ListingController)), ...((0, runtime_1.fetchMiddlewares)(ListingController_1.ListingController.prototype.insertListing)), function ListingController_insertListing(request, response, next) {
        const args = {
            listing: { "in": "body", "name": "listing", "required": true, "dataType": "any" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new ListingController_1.ListingController();
            const promise = controller.insertListing.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/listings/getAll', ...((0, runtime_1.fetchMiddlewares)(ListingController_1.ListingController)), ...((0, runtime_1.fetchMiddlewares)(ListingController_1.ListingController.prototype.getAllListings)), function ListingController_getAllListings(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new ListingController_1.ListingController();
            const promise = controller.getAllListings.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/listings/getOne/:id', ...((0, runtime_1.fetchMiddlewares)(ListingController_1.ListingController)), ...((0, runtime_1.fetchMiddlewares)(ListingController_1.ListingController.prototype.getListingById)), function ListingController_getListingById(request, response, next) {
        const args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new ListingController_1.ListingController();
            const promise = controller.getListingById.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/listings/getAverageValues', ...((0, runtime_1.fetchMiddlewares)(ListingController_1.ListingController)), ...((0, runtime_1.fetchMiddlewares)(ListingController_1.ListingController.prototype.getAverageValues)), function ListingController_getAverageValues(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new ListingController_1.ListingController();
            const promise = controller.getAverageValues.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/listings/update/:id', ...((0, runtime_1.fetchMiddlewares)(ListingController_1.ListingController)), ...((0, runtime_1.fetchMiddlewares)(ListingController_1.ListingController.prototype.updateListing)), function ListingController_updateListing(request, response, next) {
        const args = {
            listing: { "in": "body", "name": "listing", "required": true, "ref": "Listing" },
            id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new ListingController_1.ListingController();
            const promise = controller.updateListing.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/listings/sell/:id', ...((0, runtime_1.fetchMiddlewares)(ListingController_1.ListingController)), ...((0, runtime_1.fetchMiddlewares)(ListingController_1.ListingController.prototype.sellListing)), function ListingController_sellListing(request, response, next) {
        const args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new ListingController_1.ListingController();
            const promise = controller.sellListing.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/listings/search', ...((0, runtime_1.fetchMiddlewares)(ListingController_1.ListingController)), ...((0, runtime_1.fetchMiddlewares)(ListingController_1.ListingController.prototype.searchListings)), function ListingController_searchListings(request, response, next) {
        const args = {
            filter: { "in": "body", "name": "filter", "required": true, "ref": "SearchCriteria" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new ListingController_1.ListingController();
            const promise = controller.searchListings.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/users/login', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.login)), function UserController_login(request, response, next) {
        const args = {
            user: { "in": "body", "name": "user", "required": true, "ref": "User" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new UserController_1.UserController();
            const promise = controller.login.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/users/insert', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.insertUser)), function UserController_insertUser(request, response, next) {
        const args = {
            user: { "in": "body", "name": "user", "required": true, "ref": "User" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new UserController_1.UserController();
            const promise = controller.insertUser.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/users/update', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.updateUser)), function UserController_updateUser(request, response, next) {
        const args = {
            user: { "in": "body", "name": "user", "required": true, "ref": "User" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new UserController_1.UserController();
            const promise = controller.updateUser.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/users/fetchUser/:kor_ime', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.getUserByKorIme)), function UserController_getUserByKorIme(request, response, next) {
        const args = {
            kor_ime: { "in": "path", "name": "kor_ime", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new UserController_1.UserController();
            const promise = controller.getUserByKorIme.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, response, successStatus, next) {
        return Promise.resolve(promise)
            .then((data) => {
            let statusCode = successStatus;
            let headers;
            if (isController(controllerObj)) {
                headers = controllerObj.getHeaders();
                statusCode = controllerObj.getStatus() || statusCode;
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            returnHandler(response, statusCode, data, headers);
        })
            .catch((error) => next(error));
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function returnHandler(response, statusCode, data, headers = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            data.pipe(response);
        }
        else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        }
        else {
            response.status(statusCode || 204).end();
        }
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function responder(response) {
        return function (status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    }
    ;
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function getValidatedArgs(args, request, response) {
        const fieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                    else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                    else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                case 'res':
                    return responder(response);
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new runtime_1.ValidateError(fieldErrors, '');
        }
        return values;
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
exports.RegisterRoutes = RegisterRoutes;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
//# sourceMappingURL=routes.js.map