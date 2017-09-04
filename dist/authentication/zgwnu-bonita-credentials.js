"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZgwnuBonitaCredentials = /** @class */ (function () {
    function ZgwnuBonitaCredentials(username, password, navigateTo, secret) {
        this.username = username;
        this.password = password;
        this.navigateTo = navigateTo;
        this.secret = secret;
    }
    Object.defineProperty(ZgwnuBonitaCredentials.prototype, "credsUrlEncoded", {
        get: function () {
            return 'username=' + this.username + '&password=' + this.password + '&redirect=false';
        },
        enumerable: true,
        configurable: true
    });
    return ZgwnuBonitaCredentials;
}());
exports.ZgwnuBonitaCredentials = ZgwnuBonitaCredentials;
