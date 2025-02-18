// express response patch for dynamicHelpers support
const response = require('express').response,
    render = response.render;


module.exports = (app) => {
    // add dynamicHelpers function to app object
    app.dynamicHelpers = (helpers) => {
        app._dynamicHelpers = app._dynamicHelpers || {};
        for (let key in helpers) {
            if (helpers.hasOwnProperty(key)) {
                app._dynamicHelpers[key] = helpers[key];
            }
        }
    };
};

// patch render function
response.render = function() {
    var dynamicHelpers = this.app._dynamicHelpers;

    if (dynamicHelpers) {
        for (let key in dynamicHelpers) {
            // call every helper and sign result to locals
            this.locals[key] = dynamicHelpers[key].call(this.app, this.req, this);
        }
    }

    render.apply(this, arguments);
};