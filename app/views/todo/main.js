module.exports = Backbone.View.extend({
    config: require('config'),
    el: '#body',
    events: {
        'click #all-todo': 'allTodos',
        'click #active-todo': 'activeTodos',
        'click #done-todo': 'doneTodos',
    },

    initialize: function () {
        var TodoListView = require('views/todo/list');
        var TodosModel = require('collections/todos');
        var TodoAddView = require('views/todo/add');
        this.todoListView = new TodoListView({model: new TodosModel()});
        this.todoAddView = new TodoAddView();
        this.render();
    },

    render: function () {
        this.$('#menu').after(this.todoAddView.render().el);
        return this;
    },

    allTodos: function (event) {
        event.preventDefault();
        this.todoListView.model.url = this.config.api.url + "/api/todo";
        this.todoListView.initialize()
    },

    activeTodos: function (event) {
        event.preventDefault();
        this.todoListView.model.url = this.config.api.url + "/api/todo?done=false";
        this.todoListView.initialize()
    },

    doneTodos: function (event) {
        event.preventDefault();
        this.todoListView.model.url = this.config.api.url + "/api/todo?done=true";
        this.todoListView.initialize()
    }

});