module.exports = Backbone.Router.extend({

    routes: {
        "*filter": "todoList"
    },


    todoList: function () {
        var MainView = require('views/todo/main');
        new MainView()
    }


});
