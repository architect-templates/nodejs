const todoRepository = require('../repository/todo.repository');

class TodoService {

  constructor() { }

  async getTodos() {
    return await todoRepository.getTodos();
  }

  async createTodo(todo) {
    return await todoRepository.createTodo(todo);
  }

  async updateTodo(todo) {
    return await todoRepository.updateTodo(todo);
  }

  async deleteTodo(todoId) {
    return await todoRepository.deleteTodo(todoId);
  }

}

module.exports = new TodoService();
