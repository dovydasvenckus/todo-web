module.exports = Backbone.View.extend({
    tagName: 'div',
    template: require('templates/todo/add.jade'),
    events: {
        'keyup #todo-title-box': 'keyPressHandler'
    },
    Todo: require('models/todo'),
    list: undefined,

    initialize: function () {
        this.initListIdFromUrl();
        this.render();
    },

    initListIdFromUrl: function () {
        var splitUrl = window.location.hash.split('/');
        if (splitUrl[0] == '#list' && Number.isInteger(parseInt(splitUrl[1]))) {
            this.list = splitUrl[1];
        }
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    addTodo: function () {
        var self = this;
        var todo = new this.Todo({title: this.$('#todo-title-box').val(), todoListId: this.list});
        var valid = todo.save({}, {
            headers: {'Authorization': localStorage.getItem("auth")},
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