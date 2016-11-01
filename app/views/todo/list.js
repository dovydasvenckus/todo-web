module.exports = Backbone.View.extend({
    tagName: 'div',
    template: require('templates/todo/list.jade'),
    todoList: undefined,


    initialize: function () {
        this.updateView();
    },

    render: function () {
        this.$el.html('');
        this.$el.append(this.template());

        if (!_.isEmpty(this.todoList)) {
            this.appendRows(this);
        }
        return this;
    },

    updateView: function () {
        var self = this;
        this.model.fetch({
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
                model: todo
            });
            this.$('.table tbody').append(todoView.render().el);
        }.bind(this));
    }

});