module.exports = Backbone.View.extend({
    tagName: 'tr',
    template: require('templates/todo/entry.jade'),
    events: {
        'click .isDone': 'toggle',
    },


    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },
    
    toggle: function () {
        this.model.toggle();
    }
});