module.exports = Backbone.View.extend({
    template: require('templates/layout/menu.jade'),
    events: {
        'click #all-todo': 'allTodos',
        'click #active-todo': 'activeTodos',
        'click #done-todo': 'doneTodos'
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    allTodos: function () {
        this.closeDrawer();
    },

    activeTodos: function () {
        this.closeDrawer();
    },

    doneTodos: function () {
        this.closeDrawer();
    },

    closeDrawer: function () {
        var drawer = document.querySelector('.mdl-layout');
        drawer.MaterialLayout.toggleDrawer();
    }
});