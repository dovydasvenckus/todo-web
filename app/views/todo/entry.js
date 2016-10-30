module.exports = Backbone.View.extend({
    tagName: 'tr',
    template: require('templates/todo/entry.jade'),
    events: {
        'click .isDone': 'toggle',
        'click .delete': 'destroy'
    },


    render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },

    toggle: function () {
        this.model.toggle();
    },

    destroy: function () {
        $.ajax({
            type: "DELETE",
            url: require('config').api.url + "/api/todo/" + this.model.get('id'),
        });
    }
});