module.exports = {

    initialize: function() {
        var ApplicationRouter = require('router');
        this.applicationRouter = new ApplicationRouter();

        if (typeof Object.freeze === 'function') Object.freeze(this); // You're frozen when your heart's not open
    }
};