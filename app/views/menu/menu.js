module.exports = Backbone.View.extend({
    template: require('templates/menu/menu.jade'),
    el: '#main-container',
    events: {
        'click #all-todo': 'allTodos',
        'click #active-todo': 'activeTodos',
        'click #done-todo': 'doneTodos'
    },

    initialize: function (options) {
        this.config = require('config');
        this.todoListView = options.todoListView;
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    allTodos: function (event) {
        event.preventDefault();
        this.trigger('showAllTodos');
    },

    activeTodos: function (event) {
        event.preventDefault();
        this.trigger('showActiveTodos');
    },

    doneTodos: function (event) {
        event.preventDefault();
        this.trigger('showDoneTodos');
    }
});