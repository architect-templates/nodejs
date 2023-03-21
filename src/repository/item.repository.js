const { connect } = require("../config/db.config");
const logger = require("../logger/api.logger");

class ItemRepository {
  db = {};

  constructor() {
    this.db = connect();
    this.db.sequelize.sync({ force: false });
  }

  async getItems() {
    return this.db.items.findAll();
  }

  async createItem(item) {
    return this.db.items.create(item);
  }
}

module.exports = new ItemRepository();
