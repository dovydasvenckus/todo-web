module.exports = Backbone.View.extend({
    tagName: 'li',
    className: 'todo-item mdl-list__item',
    template: require('templates/todo/entry.jade'),
    events: {
        'click .isDone': 'toggle',
        'click .delete': 'destroy'
    },

    initialize: function () {
        this.listenTo(this.model, "change", this.render);
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        componentHandler.upgradeElement(this.$('.mdl-checkbox').get(0));
        return this;
    },

    toggle: function () {
        this.model.toggle();
        if (this.$('.isDone').is(':checked')) {
            this.$el.hide();
        }
    },

    destroy: function (event) {
        var self = this;

        event.preventDefault();
        $.ajax({
            type: "DELETE",
            headers: {'Authorization': localStorage.getItem("auth")},
            url: require('config').api.url + "/api/todo/" + this.model.get('id'),
            success: function () {
                self.$el.hide();
            }
        });
    }
});