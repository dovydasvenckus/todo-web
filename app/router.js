module.exports = Backbone.Router.extend({
    MainView: require('views/layout/main'),

    routes: {
        "": "todoList",
        "todo": "todoList",
        "todo/:filter": "filterTodos"
    },


    todoList: function () {
        new this.MainView()
    },

    filterTodos: function (filter) {
        new this.MainView({status: filter})
    }

});
