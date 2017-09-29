"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ZgwnuBonitaCredentials {
    constructor(username, password, navigateTo, secret) {
        this.username = username;
        this.password = password;
        this.navigateTo = navigateTo;
        this.secret = secret;
    }
    get credsUrlEncoded() {
        return 'username=' + this.username + '&password=' + this.password + '&redirect=false';
    }
}
exports.ZgwnuBonitaCredentials = ZgwnuBonitaCredentials;
