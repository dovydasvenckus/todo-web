module.exports = Backbone.View.extend({
    template: require('templates/layout/menu.jade'),

    initialize: function () {
        var self = this;
        var ListCollection = require("collections/lists");
        this.model = new ListCollection();
        this.model.fetch({
            headers: {'Authorization': localStorage.getItem("auth")},
            success: function (lists) {
                self.lists = lists;
                self.render();
                self.renderStaticItems();
                self.renderDynamicItems();
            }
        });
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    renderStaticItems: function () {
        var models = [
            {id: 'active-todo', url: '#/todo', text: 'Todo'},
            {id: 'all-todo', url: '#/todo/all', text: 'All'},
            {id: 'done-todo', url: '#/todo/done', text: 'Done'}
        ];

        this.renderItems(models);
    },

    renderDynamicItems: function () {
        var self = this;
        var menuItems = [];
        self.lists.forEach(function (element) {
            menuItems.push(self.transformToMenuItem(element));
        });

        self.renderItems(menuItems);
    },

    renderItems: function (models) {
        var MenuView = require('views/layout/menu_item');

        models.forEach(function (element) {
            var menuView = new MenuView({
                model: element
            });
            this.$('.mdl-navigation').append(menuView.el);
        });
    },

    transformToMenuItem: function (listModel) {
        return {
            id: 'list-' + listModel.get("id"),
            url: "/#list/" + listModel.get("id") + "/todos",
            text: listModel.get("title")
        };
    }
});