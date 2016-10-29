var Todo = require('models/todo')
module.exports = Backbone.Collection.extend({
    model: Todo,
    url: '/api/todo?done=false',
    parse: function(response) {
        return response;
    }
});
