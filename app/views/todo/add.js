module.exports = Backbone.View.extend({
    tagName: 'div',
    template: require('templates/todo/add.jade'),
    events: {
        'keyup #todo-title-box': 'keyPressHandler'
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    addTodo: function () {
        if (!_.isEmpty(this.$('#todo-title-box').val())) {
            var todo = {
                title: this.$('#todo-title-box').val()
            };
            this.createTodoOnServer(todo);
        }
    },

    createTodoOnServer: function (todo) {
        var self = this;
        $.post(require('config').api.url + "/api/todo", JSON.stringify(todo), function(data, textStatus, request) {
            self.$('#todo-title-box').val("");
            var createdTodoUrl = request.getResponseHeader('Location');
            self.trigger('newEntryAdded', createdTodoUrl);
        });
    },

    keyPressHandler: function (event) {
        if (event.keyCode === 13) {
            this.addTodo();
        }
    }
});