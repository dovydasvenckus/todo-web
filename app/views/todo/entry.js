module.exports = Backbone.View.extend({
    tagName: 'tr',

    template: require('templates/todo/entry.jade'),

    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});