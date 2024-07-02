const ItemDao = require('../dao/itemDao');

class ItemService {
  static async create(item) {
    return await ItemDao.create(item);
  }

  static async findAll() {
    return await ItemDao.findAll();
  }

  static async findById(id) {
    return await ItemDao.findById(id);
  }

  static async update(id, item) {
    return await ItemDao.update(id, item);
  }

  static async delete(id) {
    return await ItemDao.delete(id);
  }
}

module.exports = ItemService;