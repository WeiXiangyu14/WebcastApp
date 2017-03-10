import { Injectable } from '@angular/core';
export var Storage = (function () {
    function Storage() {
    }
    Storage.prototype.write = function (key, value) {
        if (value) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    };
    Storage.prototype.read = function (key) {
        var value = localStorage.getItem(key);
        if (value && value != "undefined" && value != "null") {
            return JSON.parse(value);
        }
        return null;
    };
    Storage.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    Storage.prototype.clear = function () {
        sessionStorage.clear();
    };
    Storage.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Storage.ctorParameters = [];
    return Storage;
}());
//# sourceMappingURL=storage.js.map