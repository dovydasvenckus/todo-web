module.exports = Backbone.Model.extend({
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
            url: "/api/todo/toggle/" + self.get("id"),
            success: function () {
                self.set("isDone", !isDone);
            },
        });
    }
});
