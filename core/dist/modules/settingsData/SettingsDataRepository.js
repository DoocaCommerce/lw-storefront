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
exports.getSettings = exports.getSections = exports.getAllSettings = void 0;
const GraphqlService_1 = require("../../services/GraphqlService");
function getAllSettings() {
    return __awaiter(this, void 0, void 0, function* () {
        const settingsQuery = (0, GraphqlService_1.gql) `
    query {
      settings {
        settings
        sections
      }
    }
  `;
        const { settings } = yield (0, GraphqlService_1.query)(settingsQuery);
        const sectionsParse = JSON.parse(settings.sections);
        const settingsParse = JSON.parse(settings.settings);
        return { sections: sectionsParse, settings: settingsParse };
    });
}
exports.getAllSettings = getAllSettings;
function getSections() {
    return __awaiter(this, void 0, void 0, function* () {
        const settingsQuery = (0, GraphqlService_1.gql) `
    query {
      settings {
        sections
      }
    }
  `;
        const { settings } = yield (0, GraphqlService_1.query)(settingsQuery);
        return JSON.parse(settings.sections);
    });
}
exports.getSections = getSections;
function getSettings() {
    return __awaiter(this, void 0, void 0, function* () {
        const settingsQuery = (0, GraphqlService_1.gql) `
    query {
      settings {
        settings
      }
    }
  `;
        const { settings } = yield (0, GraphqlService_1.query)(settingsQuery);
        return JSON.parse(settings.settings);
    });
}
exports.getSettings = getSettings;
