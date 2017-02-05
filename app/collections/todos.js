module.exports = Backbone.Collection.extend({
    model: require('models/todo'),
    url: require('config').api.url + '/api/todo?done=false',

    getUrl: function (url) {
        return require('config').api.url + url;
    },

    setUrlAll: function () {
        this.url = this.getUrl("/api/todo");
    },

    setUrlDone: function () {
        this.url = this.getUrl("/api/todo?done=true");
    },

    setUrlActive: function () {
        this.url = this.getUrl("/api/todo?done=false");
    },

    setUrlForListId: function (listId) {
        this.url = require('config').api.url + "/api/list/" + listId + "/todos";
    }
});
