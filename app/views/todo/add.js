module.exports = Backbone.View.extend({
    tagName: 'div',
    template: require('templates/todo/add.jade'),
    events: {
        'keyup #todo-title-box': 'keyPressHandler'
    },
    Todo: require('models/todo'),

    initialize: function () {
        this.render()
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    addTodo: function () {
        var self = this;
        var todo = new this.Todo({title: this.$('#todo-title-box').val()});
        var valid = todo.save({}, {
            dataType: 'text',
            success: function () {
                self.resetAddTodoInputBox();
                self.trigger('newEntryAdded');
            }
        });

        if (!valid) {
            self.resetAddTodoInputBox();
        }

    },

    resetAddTodoInputBox: function () {
        $('#todo-title-box').val("");
    },

    keyPressHandler: function (event) {
        if (event.keyCode === 13) {
            this.addTodo();
        }
    }
});