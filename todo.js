
let todoList = {
  todos: [],
  // displayTodos: function() { 
  //   if (this.todos.length === 0) {
  //     console.log('Your todo list is empty!');
  //   }else {
  //     console.log('My Todos:');
  //     for (let i = 0; i < this.todos.length; i++) {
  //       if (this.todos[i].completed === true) {
  //         console.log('(x)', this.todos[i].todoText);
  //       }else{
  //         console.log('()', this.todos[i].todoText);
  //       }
  //     }
  //   }
  //  console.log('myTodos:',this.todos);
  // },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    // this.displayTodos();
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    // this.displayTodos();

  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    // this.displayTodos();
    
  },
  toggleCompleted: function(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    // this.displayTodos();
  },
  toggleAll: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    // CASE:1 If everything's true, make everything false.
    // Get number of completed todos.
    // for (let i = 0; i < totalTodos; i++) {
    //   if (this.todos[i].completed === true) {
    //     completedTodos++;
    //   }
    // }

    // this.todos.forEach(function(todo) {
    //   if (todo.completed === true) {
    //     completedTodos++;
    //   }
    // });


    // if (completedTodos === totalTodos) {
    //   this.todos.forEach(function(todo) {
    //     todo.completed = false;
    //   });
    // if (completedTodos === totalTodos) {
    //   // Make everything false.
    //   for (var i = 0; i < totalTodos; i++) {
    //     this.todos[i].completed = false;
      // }

      // Case 2: Otherwise, make everything true.
    // } else {
    //   this.todos.forEach(function(todo) {
    //     todo.completed = true;
    //   });
      // for (let i = 0; i < totalTodos; i++) {
      //   this.todos[i].completed = true;
      // }

          // CASE:1 If everything's true, make everything false.
    this.todos.forEach(function(todo) {
      if (completedTodos === totalTodos) {
        todo.completed = false;

      // Case 2: Otherwise, make everything true.

      }else{
        todo.completed = true;
      }
    });
  }
};

// 1.We want to get acess to the display todos button.

let displayTodosButton = document.getElementById('displayTodosButton');
// console.log(displayTodosButton);

let toggleAllButton = document.getElementById('toggelAllButton');
// console.log(toggleAllButton);


// 2.We want to run displayTodos method, when someone clicks the dislay todos button

// displayTodosButton.addEventListener('click', function() {
//   todoList.displayTodos();
// });

//  display button and toggle not working

// toggleAllButton.addEventListener('click', function() {
//   todoList.toggleAll();
// });

let handlers = {
 addTodo: function() {
   let addTodoTextInput = document.getElementById('addTodoTextInput');
   todoList.addTodo(addTodoTextInput.value);
   addTodoTextInput.value = '';
   view.displayTodos();
 },

 changeTodo: function() {
   let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
   let changeTodoTextInput = document.getElementById('changeTodoTextInput');
   todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
   changeTodoTextInput.value = '';
   view.displayTodos();
 },

 deleteTodo: function(postion) {
  //  let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
   todoList.deleteTodo(postion);
  //  deleteTodoPositionInput.value = '';
   view.displayTodos();
  },

  toggleCompleted: function() {
    let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
  todoList.toggleAll();
  view.displayTodos();
  }
};

let view = {
  displayTodos: function() {
    let todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';

    // for (let i = 0; i < todoList.todos.length; i++) {
    //   let todoLi = document.createElement('li');
    //   let todo = todoList.todos[i];
    //   let todoTextWithCompletion = '';

      // if (todo.completed === true ) {
      //   todoTextWithCompletion = '(x)' + todo.todoText;
      // }else{
      //   todoTextWithCompletion = '()' + todo.todoText;
      // }
      
    //   // todoLi.textContent = todoList.todos[i].todoText;
    // todoLi.id = i;
    // todoLi.textContent = todoTextWithCompletion;
    // todoLi.appendChild(this.createDeleteButton());
    // todosUl.appendChild(todoLi);
    // }

    // this refers to the view object
    // forEach (callback, this)
    
    todoList.todos.forEach(function(todo, position) {
      let todoLi = document.createElement('li');
      let todoTextWithCompletion = '';

      if (todo.completed === true ) {
        todoTextWithCompletion = '(x)' + todo.todoText;
      }else{
        todoTextWithCompletion = '()' + todo.todoText;
      }

      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }, this);

  },
  createDeleteButton: function() {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setupEventListeners: function() {
    let todosUl = document.querySelector('ul');

    todosUl.addEventListener('click', function(event){
      // console.log(event.target.parentNode.id);

      // Get the element that was clicked on
      let elementClicked = event.target;

      // check if elementClicked is a delete Button
      if (elementClicked.className === 'deleteButton') {
      // Run handlers.deleteTodo(position).
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setupEventListeners();


