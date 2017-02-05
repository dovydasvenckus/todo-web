module.exports = Backbone.View.extend({
    template: require('templates/layout/menu_item.jade'),

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model));
        return this;
    }
});