import * as colog from 'cologrinchis';
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
export default LaGuaGua;
export var laGuaGua = new LaGuaGua();
