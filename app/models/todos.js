var Todo = require('models/todo')
module.exports = Backbone.Collection.extend({
    model: Todo,
    url: '/api/todo',
    parse: function(response) {
        return response;
    }
})
