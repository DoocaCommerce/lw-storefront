var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import stringHelper from './helpers/stringHelper';
import styleHelper from './helpers/styleHelper';
import viewportHelper from './helpers/viewportHelper';
import BrandService from './modules/brand/BrandService';
import SectionsService from './modules/sections/SectionsService';
import SettingsService from './modules/settings/SettingsService';
import Socket from './socket';
export var helpers = {
    stringHelper: stringHelper,
    styleHelper: styleHelper,
    viewportHelper: viewportHelper
};
export var services = {
    brand: BrandService,
    sections: SectionsService,
    settings: SettingsService
};
export var socket = __assign({}, Socket);
