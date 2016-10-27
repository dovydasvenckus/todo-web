document.addEventListener('DOMContentLoaded', function() {
  var Todos = require('models/todos');
  var todos = new Todos().fetch({
    success: function(todoList){
       todoList.each(function(todo) {
         $('#table-body').append(
           '<tr>' +
             '<td>' + todo.get('id') + '</td>' +
             '<td>' + todo.get('title') + '</td>' +
             '<td>' + todo.get('done') + '</td>' +
           '</tr>'
         );
       })
   }});
});
