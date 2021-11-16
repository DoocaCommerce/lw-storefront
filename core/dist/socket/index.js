"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createSocket_1 = require("./createSocket");
const updateSettingsData_1 = require("./updateSettingsData");
const focusSection_1 = require("./focusSection");
exports.default = {
    create(hashPreview, store) {
        (0, createSocket_1.default)(hashPreview, (0, updateSettingsData_1.default)(store), focusSection_1.default);
    }
};
//# sourceMappingURL=index.js.map