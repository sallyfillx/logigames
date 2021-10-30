"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productLocalDataSource = exports.productHttpDataSource = exports.client = void 0;
var axios_1 = require("axios");
var product_http_1 = require("./datasource/product.http");
var product_local_1 = require("./datasource/product.local");
var localProductList = require("./datasource/product.local.json");
exports.client = axios_1.default.create({
    baseURL: "https://logigamessas.hiboutik.com/api",
    headers: {
        Accept: 'application/json',
    },
    auth: {
        username: 'contact@logigames.fr',
        password: 'P5JAYRZGI3SMNHJACVXMBDAOKQJY9CPP7YQ'
    }
});
console.log({
    createLocalProductDataSource: product_local_1.createLocalProductDataSource
});
exports.productHttpDataSource = (0, product_http_1.createHttpProductDataSource)(exports.client);
exports.productLocalDataSource = (0, product_local_1.createLocalProductDataSource)(localProductList);
