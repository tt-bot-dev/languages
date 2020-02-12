"use strict";
// This language is for the translators of tt.bot to see the contexts of the terms.


module.exports = bot => {
    const o = {};
    const english = require("./en")(bot);
    for (const key in english) {
        if (!Object.prototype.hasOwnProperty.call(english, key)) continue;
        o[key] = key;
    }
    return o;
};