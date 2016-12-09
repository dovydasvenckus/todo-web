module.exports = Backbone.Collection.extend({
    model: require('models/todo'),
    url: require('config').api.url + '/api/todo?done=false',
    parse: function (response) {
        return response;
    },

    getUrl: function (url) {
        return require('config').api.url + url;
    },

    setUrlAll: function () {
        this.url = this.getUrl("/api/todo")
    },

    setUrlDone: function () {
        this.url = this.getUrl("/api/todo?done=true")
    },

    setUrlActive: function () {
        this.url = this.getUrl("/api/todo?done=false")
    }
});
