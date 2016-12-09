module.exports = Backbone.View.extend({
    template: require('templates/layout/main.jade'),

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

});