module.exports = Backbone.View.extend({
    config: require('config'),
    el: '#body',

    initialize: function () {
        var self = this;
        var TodoAddView = require('views/todo/add');
        var MenuView = require('views/menu/menu');

        this.todoAddView = new TodoAddView();
        this.todoAddView.bind('newEntryAdded', this.newItemWasAdded, this);

        this.menuView = new MenuView({todoListView: self.todoListView});
        this.menuView
            .bind('showAllTodos', this.allTodos, this)
            .bind('showActiveTodos', this.activeTodos, this)
            .bind('showDoneTodos', this.doneTodos, this);

        this.render();
    },

    render: function () {
        this.$('#main-container').append(this.menuView.render().el);
        this.$('#add-todo').append(this.todoAddView.render().el);
        this.renderTodoList();
        return this;
    },

    renderTodoList: function () {
        var TodoListView = require('views/todo/list');
        var TodosModel = require('collections/todos');
        this.todoListView = new TodoListView({
            model: new TodosModel(),
            el: this.$('#todo-list')
        });
    },

    newItemWasAdded: function () {
        this.todoListView.updateView();
    },

    allTodos: function () {
        this.todoListView.model.url = this.config.api.url + "/api/todo";
        this.todoListView.updateView()
    },

    activeTodos: function () {
        this.todoListView.model.url = this.config.api.url + "/api/todo?done=false";
        this.todoListView.updateView()
    },

    doneTodos: function () {
        this.todoListView.model.url = this.config.api.url + "/api/todo?done=true";
        this.todoListView.updateView()
    }

});