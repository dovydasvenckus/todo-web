module.exports = Backbone.View.extend({
    tagName: 'div',
    template: require('templates/todo/list.jade'),
    todoList: undefined,
    status: undefined,
    list: undefined,


    initialize: function (options) {
        var TodosModel = require('collections/todos');
        this.model = new TodosModel();

        this.setOptions(options);
        this.setupTodosUrl();

        this.updateView();
    },

    render: function () {
        this.$el.html(this.template());

        if (!_.isEmpty(this.todoList)) {
            this.appendRows(this);
        }

        return this;
    },

    updateView: function () {
        var self = this;
        this.model.fetch({
            headers: {'Authorization': localStorage.getItem("auth")},
            success: function (todoList) {
                self.todoList = todoList;
                self.render();
            }
        });
    },

    appendRows: function () {
        var TodoView = require('views/todo/entry');
        this.todoList.each(function (todo) {
            var todoView = new TodoView({
                headers: {'Authorization': localStorage.getItem("auth")},
                model: todo
            });
            this.$('.todo-list').append(todoView.render().el);
        }.bind(this));
    },

    setOptions: function (options) {
        if (options) {
            this.status = options.status;
            this.list = options.list;
        }
    },

    setupTodosUrl: function () {
        if (this.list) {
            this.model.setUrlForListId(this.list);
            return;
        }

        if (this.status == 'all') {
            this.model.setUrlAll();
        }
        else if (this.status == 'done') {
            this.model.setUrlDone();
        }
    }

});