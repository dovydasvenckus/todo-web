module.exports = Backbone.View.extend({
    tagName: 'div',
    template: require('templates/todo/menu.jade'),
    todoListView: undefined,
    events: {
        'click #all-todo': 'allTodos',
        'click #active-todo': 'activeTodos',
        'click #done-todo': 'doneTodos'
    },

    initialize: function (options) {
        this.config = require('config');
        this.todoListView = options.todoListView;
        this.$el.attr('id', 'menu');
        this.$el.attr('class', 'column')
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    allTodos: function (event) {
        event.preventDefault();
        this.todoListView.model.url = this.config.api.url + "/api/todo";
        this.todoListView.updateView()
    },

    activeTodos: function (event) {
        event.preventDefault();
        this.todoListView.model.url = this.config.api.url + "/api/todo?done=false";
        this.todoListView.updateView()
    },

    doneTodos: function (event) {
        event.preventDefault();
        this.todoListView.model.url = this.config.api.url + "/api/todo?done=true";
        this.todoListView.updateView()
    }
});