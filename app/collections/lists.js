module.exports = Backbone.Collection.extend({
    model: require('models/list'),
    url: require('config').api.url + '/api/list',
    defaults: {
        id: undefined,
        title: ''
    }

});
