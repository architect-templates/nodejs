const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');

class TodoRepository {

  db = {};

  constructor() {
    this.db = connect();
    this.db.sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync database.");
    });
  }

  async getTodos() {
    try {
      const todos = await this.db.todos.findAll();
      return todos;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async createTodo(todo) {
    let data = {};
    try {
      todo.createdate = new Date().toISOString();
      data = await this.db.todos.create(todo);
    } catch (err) {
      logger.error('Error: ' + err);
    }
    return data;
  }

  async updateTodo(todo) {
    let data = {};
    try {
      todo.updateddate = new Date().toISOString();
      data = await this.db.todos.update({ ...todo }, {
        where: {
          id: todo.id
        }
      });
    } catch (err) {
      logger.error('Error: ' + err);
    }
    return data;
  }

  async deleteTodo(todoId) {
    let data = {};
    try {
      data = await this.db.todos.destroy({
        where: {
          id: todoId
        }
      });
    } catch (err) {
      logger.error('Error: ' + err);
    }
    return data;
  }

}

module.exports = new TodoRepository();
