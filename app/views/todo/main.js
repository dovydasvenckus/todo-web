module.exports = Backbone.View.extend({
    config: require('config'),
    el: '#body',

    initialize: function () {
        var self = this;
        var TodoListView = require('views/todo/list');
        var TodosModel = require('collections/todos');
        var TodoAddView = require('views/todo/add');
        var MenuView = require('views/todo/menu');
        this.todoListView = new TodoListView({
            model: new TodosModel(),
            parent: this
        });
        this.todoAddView = new TodoAddView();
        this.menuView = new MenuView({todoListView: self.todoListView});
        this.render();
    },

    render: function () {
        this.$('#menu-wrapper').append(this.menuView.render().el);
        this.$('#menu-wrapper').after(this.todoAddView.render().el);
        return this;
    }

});