module.exports = Backbone.Router.extend({
    MainView: require('views/layout/main'),
    LoginView: require('views/layout/login'),
    App: require('application'),

    routes: {
        "": "todoList",
        "todo": "todoList",
        "todo/:filter": "filterTodos",
        "login": "login"
    },

    todoList: function () {
        if (localStorage.getItem("auth")) {
            new this.MainView();
        }
        else {
            this.login();
        }
    },

    filterTodos: function (filter) {
        new this.MainView({status: filter});
    },

    login: function () {
        new this.LoginView();
    }

});
