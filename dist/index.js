"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.laGuaGua = void 0;
const colog = require("cologrinchis");
class LaGuaGua {
    constructor() {
        colog.info('bus', 'New bus');
        this.subscriptions = {};
    }
    publish(message, data) {
        colog.info('bus', 'Publish ' + message);
        const handlers = this.subscriptions[message];
        if (handlers) {
            handlers.forEach((h) => {
                if (message) {
                    colog.info('bus', `Reached trigger for ${message}`);
                }
                if (handlers === null || handlers === void 0 ? void 0 : handlers.length) {
                    colog.log('bus', `with count: ${handlers.length}`);
                }
                if (data) {
                    colog.log('bus', `and data:  ${data}`);
                }
                h(message, data);
            });
        }
    }
    subscribe(message, trigger) {
        colog.info('bus', `Subscribe ${message}`);
        if ((this === null || this === void 0 ? void 0 : this.subscriptions[message]) === undefined)
            this.subscriptions[message] = [];
        colog.info('bus', `Pushing trigger for ${message}`);
        this.subscriptions[message].push(trigger);
    }
    clear() {
        colog.info('bus', 'Clear');
        this.subscriptions = {};
    }
}
exports.default = LaGuaGua;
exports.laGuaGua = new LaGuaGua();
//# sourceMappingURL=index.js.map