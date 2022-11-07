const todoService = require('../service/todo.service');
const logger = require('../logger/api.logger');

class TodoController {

  async getTodos() {
    logger.info('Controller: getTodos')
    return await todoService.getTodos();
  }

  async createTodo(todo) {
    logger.info('Controller: createTodo', todo);
    return await todoService.createTodo(todo);
  }

  async updateTodo(todo) {
    logger.info('Controller: updateTodo', todo);
    return await todoService.updateTodo(todo);
  }

  async deleteTodo(todoId) {
    logger.info('Controller: deleteTodo', todoId);
    return await todoService.deleteTodo(todoId);
  }
}

module.exports = new TodoController();
