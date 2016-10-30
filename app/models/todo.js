module.exports = Backbone.Model.extend({
    url: require('config').api.url + '/api/todo',
    defaults: {
        id: '',
        title: '',
        isDone: false
    },

    toggle: function () {
        var self = this;
        var isDone = self.get('isDone');
        $.ajax({
            type: "POST",
            url: require('config').api.url + "/api/todo/toggle/" + self.get("id"),
            success: function () {
                self.set("isDone", !isDone);
            },
        });
    }
});
