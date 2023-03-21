const itemRepository = require("../repository/item.repository");

class ItemService {
  constructor() {}

  async getItems() {
    return itemRepository.getItems();
  }

  async createItem(item) {
    return itemRepository.createItem(item);
  }
}

module.exports = new ItemService();
