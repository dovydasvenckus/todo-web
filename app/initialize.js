document.addEventListener('DOMContentLoaded', function () {
    var TodoListView = require('views/todo/list');
    var TodosModel = require('collections/todos');
    new TodoListView({model: new TodosModel()})

});
