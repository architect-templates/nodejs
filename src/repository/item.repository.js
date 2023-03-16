const { connect } = require("../config/db.config");
const logger = require("../logger/api.logger");

class ItemRepository {
  db = {};

  constructor() {
    this.db = connect();
    this.db.sequelize.sync({ force: false }).then(() => {
      console.log("DB synced");
    });
  }

  async getItems() {
    try {
      const items = await this.db.items.findAll();
      return items;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async createItem(item) {
    let data = {};
    try {
      data = await this.db.items.create(item);
    } catch (err) {
      logger.error("Error: " + err);
    }
    return data;
  }
}

module.exports = new ItemRepository();
