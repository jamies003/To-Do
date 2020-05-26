let todoList = {
  todos: [],

  addTodo: function(todoText) {
    this.todos.push({
      todoText = todoText,
      completed : false
    });
    // this.displayTodos();
  },

  changeTodo: function(positon, todoText) {
    this.todos[positon].todoText = todoText;

    // this.displayTodos();
  },

  deleteTodo: function (positon) {
    this.todos.splice(positon, 1);

    // this.displayTodos();
  },

  toggleCompleted: function (position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;

    // this.displayTodos();
  },
  // Case1: if everything is true, make everthig false

  toggleAll: function () {
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    

    // this.displayTodos();
  },


}

