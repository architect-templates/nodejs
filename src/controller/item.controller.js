const itemService = require("../service/item.service");
const logger = require("../logger/api.logger");

class ItemController {
  async getItems() {
    logger.info("Controller: getItems");
    return await itemService.getItems();
  }

  async createItem(item) {
    logger.info("Controller: createItem", item);
    return await itemService.createItem(item);
  }
}

module.exports = new ItemController();
