module.exports = Backbone.Router.extend({
    MainView: require('views/layout/main'),
    LoginView: require('views/layout/login'),
    App: require('application'),
    MainContainer: {
        tagName: $('#main-container').prop('tagName'),
        classValue: $('#main-container').attr('class')
    },

    routes: {
        "": "todoList",
        "todo": "todoList",
        "todo/:filter": "filterTodos",
        "login": "login"
    },

    todoList: function () {
        if (localStorage.getItem("auth")) {
            this.loadView(this.MainView);
        }
        else {
            this.login();
        }
    },

    filterTodos: function (filter) {
        this.loadView(this.MainView, {status: filter});
    },

    login: function () {
        this.loadView(this.LoginView);
    },

    loadView: function (view, params) {
        if (this.view) {
            this.view.close();
            if (!$('#main-container').length) {
                $('.mdl-layout__container').remove();
                $('body').append(this.createContainerDiv());
            }
        }
        this.view = new view(params);
        componentHandler.upgradeElement($('#main-container').get(0));
    },

    createContainerDiv: function () {
        var div = document.createElement(this.MainContainer.tagName);
        div.setAttribute('id', 'main-container');
        div.setAttribute('class', this.MainContainer.classValue);
        return div;
    }

});
