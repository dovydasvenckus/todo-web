module.exports = Backbone.View.extend({
    app: require('application'),
    url: require('config').api.url + '/api/todo',
    el: "#main-container",
    template: require('templates/layout/login.jade'),
    events: {
        'click #login-button': 'login'
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    login: function () {
        var username =  this.$('#username-field').val();
        var password = this.$('#password-field').val();

        this.isLoggedIn(username, password);
    },

    isLoggedIn: function (username, password) {
        var encodedAuthHeader = this.encodeHeader(username, password);
        $.ajax(this.url, {
            type: "GET",
            headers: {
              'Authorization': encodedAuthHeader
            },
            success: function() {
                localStorage.setItem("auth", encodedAuthHeader);
                window.location.href = "/#todo";
            },
            error: function() {
                console.log("Failed to log in");
            }
        });
    },
    
    encodeHeader: function (username, password) {
        return 'Basic ' + window.btoa(username + ':' + password);
    },

    close: function () {
        this.remove();
    }
});