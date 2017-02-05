module.exports = Backbone.Model.extend({
    url: require('config').api.url + '/api/list',
    defaults: {
        id: undefined,
        title: ''
    }

});
