"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrandByID = exports.getBrands = void 0;
const GraphqlService_1 = require("../../services/GraphqlService");
const schemaDefault = ['id', 'name', 'slug'];
function getBrands(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const fieldsQuery = (options === null || options === void 0 ? void 0 : options.fields) || schemaDefault;
        const brandsQuery = (0, GraphqlService_1.gql) `
    query {
      brands {
        ${fieldsQuery.join()}
      }
    }
  `;
        const { brands } = yield (0, GraphqlService_1.query)(brandsQuery);
        return brands;
    });
}
exports.getBrands = getBrands;
function getBrandByID(id, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const fieldsQuery = (options === null || options === void 0 ? void 0 : options.fields) || schemaDefault;
        const brandQuery = (0, GraphqlService_1.gql) `
    query ($id: ID!) {
      brand(id: $id) {
        ${fieldsQuery.join()}
      }
    }
  `;
        const { brand } = yield (0, GraphqlService_1.query)(brandQuery, { id });
        return brand;
    });
}
exports.getBrandByID = getBrandByID;
