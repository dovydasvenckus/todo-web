module.exports = Backbone.View.extend({
    tagName: 'tr',
    template: require('templates/todo/entry.jade'),
    events: {
        'click .isDone': 'toggle',
        'click .delete': 'destroy'
    },


    render: function () {
        this.$el.attr('class', 'todo-entry');
        this.$el.html(this.template(this.model.attributes));
        return this;
    },

    toggle: function () {
        this.model.toggle();
    },

    destroy: function () {
        var self = this;
        $.ajax({
            type: "DELETE",
            url: require('config').api.url + "/api/todo/" + this.model.get('id'),
            success: function () {
                self.$el.remove();
            }
        });
    }
});