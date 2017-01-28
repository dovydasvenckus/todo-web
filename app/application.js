module.exports = {
    currentUser: {},

    initialize: function () {
        var ApplicationRouter = require('router');
        this.applicationRouter = new ApplicationRouter();

        this.handleJqueryNotAuthorizedRequests();
    },

    handleJqueryNotAuthorizedRequests: function () {
        $(document).ajaxError(function (e, xhr, settings) {
            if (xhr.status === 401) {
                window.location.href = "/#login";
                console.log("Redirect to login");
            }
            if (xhr.status === 403) {
                console.log("Forbidden");
            }
        });
    },
};