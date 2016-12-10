module.exports = Backbone.Model.extend({
    url: require('config').api.url + '/api/todo',
    defaults: {
        id: undefined,
        title: '',
        isDone: false
    },

    validate: function (attrs) {
        if (attrs.title.replace(/\s/g, '').length === 0) {
            return "Title shouldn't be empty";
        }
    },

    toggle: function () {
        var self = this;
        var isDone = self.get('isDone');
        $.ajax({
            type: "POST",
            url: require('config').api.url + "/api/todo/toggle/" + self.get("id"),
            success: function () {
                self.set("isDone", !isDone);
            }
        });
    }
});
