const itemRepository = require("../repository/item.repository");

class ItemService {
  constructor() {}

  async getItems() {
    return await itemRepository.getItems();
  }

  async createItem(item) {
    return await itemRepository.createItem(item);
  }
}

module.exports = new ItemService();
