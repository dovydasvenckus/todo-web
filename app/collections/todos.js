module.exports = Backbone.Collection.extend({
    model: require('models/todo'),
    url: require('config').api.url + '/api/todo?done=false',
    parse: function (response) {
        return response;
    }
});
