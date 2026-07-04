function printTodos(todos:string[] | string) {
  //todos.map((todo)=> console.log(todo))
  if (typeof todos == 'odject') {
    todos.map((todo)=> console.log(todo))
  }

  else if (typeof todos == 'string') {
    console.log(todo)
  }
}
const todos = ["todo1", "todo2"]
printTodos(todos)