module.exports = Backbone.View.extend({
    template: require('templates/layout/menu.jade'),

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    }
});