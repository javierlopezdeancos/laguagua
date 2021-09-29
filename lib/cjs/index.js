"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.laGuaGua = void 0;
var colog = __importStar(require("cologrinchis"));
var LaGuaGua = /** @class */ (function () {
    function LaGuaGua() {
        colog.info('bus', 'New bus');
        this.subscriptions = {};
    }
    LaGuaGua.prototype.publish = function (message, data) {
        colog.info('bus', 'Publish ' + message);
        var handlers = this.subscriptions[message];
        if (handlers) {
            handlers.forEach(function (h) {
                if (message) {
                    colog.info('bus', "Reached trigger for " + message);
                }
                if (handlers === null || handlers === void 0 ? void 0 : handlers.length) {
                    colog.log('bus', "with count: " + handlers.length);
                }
                if (data) {
                    colog.log('bus', "and data:  " + data);
                }
                h(message, data);
            });
        }
    };
    LaGuaGua.prototype.subscribe = function (message, trigger) {
        colog.info('bus', "Subscribe " + message);
        if ((this === null || this === void 0 ? void 0 : this.subscriptions[message]) === undefined)
            this.subscriptions[message] = [];
        colog.info('bus', "Pushing trigger for " + message);
        this.subscriptions[message].push(trigger);
    };
    LaGuaGua.prototype.clear = function () {
        colog.info('bus', 'Clear');
        this.subscriptions = {};
    };
    return LaGuaGua;
}());
exports.default = LaGuaGua;
exports.laGuaGua = new LaGuaGua();
