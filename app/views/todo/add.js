module.exports = Backbone.View.extend({
    tagName: 'div',
    template: require('templates/todo/add.jade'),
    events: {
        'click #submit-todo-button': 'addTodo'
    },

    initialize: function () {
      this.$el.attr("class", "row")
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    addTodo: function () {
        if (! _.isEmpty(this.$('#todo-title-box').val())) {
            var todo = {
                title: this.$('#todo-title-box').val()
            };
            this.createTodoOnServer(todo);
            this.$('#todo-title-box').val("");
        }
    },

    createTodoOnServer: function (todo) {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(todo),
            url: require('config').api.url + "/api/todo"
        });
    }
});