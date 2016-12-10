module.exports = Backbone.View.extend({
    config: require('config'),
    el: '#body',

    status: undefined,

    initialize: function (options) {
        this.setOptions(options);

        this.render();
    },

    render: function () {
        this.renderMainLayout();
        this.renderMenu();
        this.renderAddItemField();
        this.renderTodoListView();

        return this;
    },

    renderMainLayout: function () {
        var ApplicationLayout = require('views/layout/layout');
        this.appLayout = new ApplicationLayout({el: this.$('#main-container')});
    },

    renderMenu: function () {
        var MenuView = require('views/layout/menu');
        this.menuView = new MenuView({el: this.$('.mdl-layout__drawer')});
    },

    renderAddItemField: function () {
        var TodoAddView = require('views/todo/add');
        this.todoAddView = new TodoAddView({el: this.$("#add-todo")});
        this.todoAddView.bind('newEntryAdded', this.newItemWasAdded, this);
    },

    renderTodoListView: function () {
        var TodoListView = require('views/todo/list');
        this.todoListView = new TodoListView({
            status: this.status,
            el: this.$('#todo-list-wrapper')
        });
    },

    newItemWasAdded: function () {
        this.todoListView.updateView();
    },

    setOptions: function (options) {
        if (options) {
            this.status = options.status;
        }
    }
});