module.exports = Backbone.View.extend({
    el: '#table-body',
    todoList: undefined,

    initialize: function () {
        var self = this;
        this.model.fetch({
            success: function (todoList) {
                self.todoList = todoList;
                self.render();
            }
        });
    },

    render: function () {
        var TodoView = require('views/todo/entry');
        this.$el.html('');

        this.todoList.each(function(todo) {
            var todoView = new TodoView({
                model: todo
            });
            this.$el.append(todoView.render().el);
        }.bind(this));

        return this;
    }

});