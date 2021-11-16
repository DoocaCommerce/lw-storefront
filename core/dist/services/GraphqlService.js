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
exports.gql = exports.query = void 0;
const core_1 = require("@urql/core");
Object.defineProperty(exports, "gql", { enumerable: true, get: function () { return core_1.gql; } });
const client = (0, core_1.createClient)({
    url: 'http://localhost:4000/'
});
function query(query, variables) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data, error } = yield client.query(query, variables).toPromise();
            if (error)
                throw new Error(error.message);
            return data;
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.query = query;
//# sourceMappingURL=GraphqlService.js.map