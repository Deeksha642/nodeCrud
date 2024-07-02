const ItemService = require('../service/itemService');
const jwt = require('jsonwebtoken');

class ItemController {
  static async create(ctx) {
    const item = ctx.request.body;
    const newItem = await ItemService.create(item);
    ctx.body = newItem;
  }

  static async findAll(ctx) {
    const items = await ItemService.findAll();
    ctx.body = items;
  }

  static async findById(ctx) {
    const id = ctx.params.id;
    const item = await ItemService.findById(id);
    ctx.body = item;
  }

  static async update(ctx) {
    const id = ctx.params.id;
    const item = ctx.request.body;
    const updatedItem = await ItemService.update(id, item);
    ctx.body = updatedItem;
  }

  static async delete(ctx) {
    const id = ctx.params.id;
    await ItemService.delete(id);
    ctx.body = { message: 'Item deleted successfully' };
  }

  static async login(ctx) {
    const user = { id: 1, username: 'user' }; 
    const token = jwt.sign(user, 'secret');
    ctx.body = { token };
  }
}

module.exports = ItemController;