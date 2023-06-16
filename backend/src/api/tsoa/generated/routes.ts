/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute, HttpStatusCodeLiteral, TsoaResponse, fetchMiddlewares } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AgencijeController } from './../../routes/agencije/AgencijeController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { HelloWorldController } from './../../routes/helloWorld/HelloWorldController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ListingController } from './../../routes/listings/ListingController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../../routes/users/UserController';
import type { RequestHandler } from 'express';
import * as express from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "Agencije": {
        "dataType": "refObject",
        "properties": {
            "naziv": {"dataType":"string","required":true},
            "adresa": {"dataType":"string","required":true},
            "grad": {"dataType":"string","required":true},
            "telefon": {"dataType":"double","required":true},
            "PIB": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FlattenMaps_T_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Document_any.any.any_": {
        "dataType": "refAlias",
        "type": {"ref":"FlattenMaps_T_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Slika": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "source": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Listing": {
        "dataType": "refObject",
        "properties": {
            "lokacija": {"dataType":"string","required":true},
            "ulica": {"dataType":"string","required":true},
            "nazivOglasa": {"dataType":"string","required":true},
            "tipNekretnine": {"dataType":"string","required":true},
            "cena": {"dataType":"double","required":true},
            "kvadratura": {"dataType":"double","required":true},
            "brojSoba": {"dataType":"double","required":true},
            "godinaIzgradnje": {"dataType":"double","required":true},
            "stanjeNekretnine": {"dataType":"string","required":true},
            "tipGrejanja": {"dataType":"string","required":true},
            "sprat": {"dataType":"double","required":true},
            "ukupnaSpratnost": {"dataType":"double","required":true},
            "mesecneRezije": {"dataType":"double","required":true},
            "karakteristike": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "linije": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "opis": {"dataType":"string","required":true},
            "slike": {"dataType":"array","array":{"dataType":"refObject","ref":"Slika"},"required":true},
            "datumIzmene": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"undefined"}],"required":true},
            "datumProdaje": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"undefined"}],"required":true},
            "status": {"dataType":"string","required":true},
            "oglasivac": {"dataType":"string","required":true},
            "tipOglasivaca": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ObjectId": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AverageValueId": {
        "dataType": "refObject",
        "properties": {
            "lokacija": {"dataType":"string","required":true},
            "tip": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AverageValue": {
        "dataType": "refObject",
        "properties": {
            "_id": {"ref":"AverageValueId","required":true},
            "srednjaVrednost": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateResult": {
        "dataType": "refObject",
        "properties": {
            "acknowledged": {"dataType":"boolean","required":true},
            "matchedCount": {"dataType":"double","required":true},
            "modifiedCount": {"dataType":"double","required":true},
            "upsertedCount": {"dataType":"double","required":true},
            "upsertedId": {"ref":"ObjectId","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SearchCriteria": {
        "dataType": "refObject",
        "properties": {
            "lokacija": {"dataType":"array","array":{"dataType":"string"},"default":[]},
            "tip": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"undefined"}]},
            "cenaOd": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"undefined"}]},
            "cenaDo": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"undefined"}]},
            "kvadraturaOd": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"undefined"}]},
            "kvadraturaDo": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"undefined"}]},
            "brojSobaOd": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"undefined"}]},
            "brojSobaDo": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"undefined"}]},
            "godinaIzgradnjeOd": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"undefined"}]},
            "godinaIzgradnjeDo": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"undefined"}]},
            "tipOglasivaca": {"dataType":"array","array":{"dataType":"string"},"default":[]},
            "stanjeNekretnine": {"dataType":"array","array":{"dataType":"string"},"default":[]},
            "tipGrejanja": {"dataType":"array","array":{"dataType":"string"},"default":[]},
            "spratOd": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"undefined"}]},
            "spratDo": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"undefined"}]},
            "mesecneRezijeOd": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"undefined"}]},
            "mesecneRezijeDo": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"undefined"}]},
            "status": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"undefined"}]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "User": {
        "dataType": "refObject",
        "properties": {
            "ime": {"dataType":"string","required":true},
            "prezime": {"dataType":"string","required":true},
            "datumRodjenja": {"dataType":"string","required":true},
            "grad": {"dataType":"string","required":true},
            "telefon": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "kor_ime": {"dataType":"string","required":true},
            "lozinka": {"dataType":"string","required":true},
            "tip": {"dataType":"string","required":true},
            "selectedAgency": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"undefined"}],"required":true},
            "licenca": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"undefined"}],"required":true},
            "omiljeniOglasi": {"dataType":"array","array":{"dataType":"string"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFavoriteListing": {
        "dataType": "refObject",
        "properties": {
            "kor_ime": {"dataType":"string","required":true},
            "omiljeniOglasi": {"dataType":"array","array":{"dataType":"string"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: express.Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.get('/agencije/getAll',
            ...(fetchMiddlewares<RequestHandler>(AgencijeController)),
            ...(fetchMiddlewares<RequestHandler>(AgencijeController.prototype.getAllListings)),

            function AgencijeController_getAllListings(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new AgencijeController();


              const promise = controller.getAllListings.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/helloWorld/message',
            ...(fetchMiddlewares<RequestHandler>(HelloWorldController)),
            ...(fetchMiddlewares<RequestHandler>(HelloWorldController.prototype.getHelloWorldMessage)),

            function HelloWorldController_getHelloWorldMessage(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new HelloWorldController();


              const promise = controller.getHelloWorldMessage.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/listings/insert',
            ...(fetchMiddlewares<RequestHandler>(ListingController)),
            ...(fetchMiddlewares<RequestHandler>(ListingController.prototype.insertListing)),

            function ListingController_insertListing(request: any, response: any, next: any) {
            const args = {
                    listing: {"in":"body","name":"listing","required":true,"dataType":"any"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ListingController();


              const promise = controller.insertListing.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/listings/getAll',
            ...(fetchMiddlewares<RequestHandler>(ListingController)),
            ...(fetchMiddlewares<RequestHandler>(ListingController.prototype.getAllListings)),

            function ListingController_getAllListings(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ListingController();


              const promise = controller.getAllListings.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/listings/getOne/:id',
            ...(fetchMiddlewares<RequestHandler>(ListingController)),
            ...(fetchMiddlewares<RequestHandler>(ListingController.prototype.getListingById)),

            function ListingController_getListingById(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ListingController();


              const promise = controller.getListingById.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/listings/getAverageValues',
            ...(fetchMiddlewares<RequestHandler>(ListingController)),
            ...(fetchMiddlewares<RequestHandler>(ListingController.prototype.getAverageValues)),

            function ListingController_getAverageValues(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ListingController();


              const promise = controller.getAverageValues.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/listings/update/:id',
            ...(fetchMiddlewares<RequestHandler>(ListingController)),
            ...(fetchMiddlewares<RequestHandler>(ListingController.prototype.updateListing)),

            function ListingController_updateListing(request: any, response: any, next: any) {
            const args = {
                    listing: {"in":"body","name":"listing","required":true,"ref":"Listing"},
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ListingController();


              const promise = controller.updateListing.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/listings/sell/:id',
            ...(fetchMiddlewares<RequestHandler>(ListingController)),
            ...(fetchMiddlewares<RequestHandler>(ListingController.prototype.sellListing)),

            function ListingController_sellListing(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ListingController();


              const promise = controller.sellListing.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/listings/search',
            ...(fetchMiddlewares<RequestHandler>(ListingController)),
            ...(fetchMiddlewares<RequestHandler>(ListingController.prototype.searchListings)),

            function ListingController_searchListings(request: any, response: any, next: any) {
            const args = {
                    filter: {"in":"body","name":"filter","required":true,"ref":"SearchCriteria"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ListingController();


              const promise = controller.searchListings.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/listings/getFavoriteListings',
            ...(fetchMiddlewares<RequestHandler>(ListingController)),
            ...(fetchMiddlewares<RequestHandler>(ListingController.prototype.getFavoriteListing)),

            function ListingController_getFavoriteListing(request: any, response: any, next: any) {
            const args = {
                    listings: {"in":"body","name":"listings","required":true,"dataType":"array","array":{"dataType":"string"}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ListingController();


              const promise = controller.getFavoriteListing.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/users/login',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.login)),

            function UserController_login(request: any, response: any, next: any) {
            const args = {
                    user: {"in":"body","name":"user","required":true,"ref":"User"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();


              const promise = controller.login.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/users/insert',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.insertUser)),

            function UserController_insertUser(request: any, response: any, next: any) {
            const args = {
                    user: {"in":"body","name":"user","required":true,"ref":"User"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();


              const promise = controller.insertUser.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/users/updateEmail',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.updateUserEmail)),

            function UserController_updateUserEmail(request: any, response: any, next: any) {
            const args = {
                    user: {"in":"body","name":"user","required":true,"ref":"User"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();


              const promise = controller.updateUserEmail.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/users/updateTel',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.updateUserTel)),

            function UserController_updateUserTel(request: any, response: any, next: any) {
            const args = {
                    user: {"in":"body","name":"user","required":true,"ref":"User"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();


              const promise = controller.updateUserTel.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/users/updateAgency',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.updateUserAgency)),

            function UserController_updateUserAgency(request: any, response: any, next: any) {
            const args = {
                    user: {"in":"body","name":"user","required":true,"ref":"User"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();


              const promise = controller.updateUserAgency.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/users/fetchUser/:kor_ime',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.getUserByKorIme)),

            function UserController_getUserByKorIme(request: any, response: any, next: any) {
            const args = {
                    kor_ime: {"in":"path","name":"kor_ime","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();


              const promise = controller.getUserByKorIme.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/users/updateFavoriteListing',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.updateListing)),

            function UserController_updateListing(request: any, response: any, next: any) {
            const args = {
                    user: {"in":"body","name":"user","required":true,"ref":"UserFavoriteListing"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();


              const promise = controller.updateListing.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function isController(object: any): object is Controller {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }

    function promiseHandler(controllerObj: any, promise: any, response: any, successStatus: any, next: any) {
        return Promise.resolve(promise)
            .then((data: any) => {
                let statusCode = successStatus;
                let headers;
                if (isController(controllerObj)) {
                    headers = controllerObj.getHeaders();
                    statusCode = controllerObj.getStatus() || statusCode;
                }

                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                returnHandler(response, statusCode, data, headers)
            })
            .catch((error: any) => next(error));
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function returnHandler(response: any, statusCode?: number, data?: any, headers: any = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name: string) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            data.pipe(response);
        } else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        } else {
            response.status(statusCode || 204).end();
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function responder(response: any): TsoaResponse<HttpStatusCodeLiteral, unknown>  {
        return function(status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function getValidatedArgs(args: any, request: any, response: any): any[] {
        const fieldErrors: FieldErrors  = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    }
                case 'res':
                    return responder(response);
            }
        });

        if (Object.keys(fieldErrors).length > 0) {
            throw new ValidateError(fieldErrors, '');
        }
        return values;
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
