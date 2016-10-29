module.exports = Backbone.View.extend({
    config: require('config'),
    el: '#body',
    events: {
        'click #all-todo': 'allTodos',
        'click #active-todo': 'activeTodos',
        'click #done-todo': 'doneTodos',
    },

    initialize: function () {
        this.TodoListView = require('views/todo/list');
        this.TodosModel = require('collections/todos');
        this.todoListView = new this.TodoListView({model: new this.TodosModel()})
    },

    render: function () {
        this.$el.append(this.todoListView.render().el);
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