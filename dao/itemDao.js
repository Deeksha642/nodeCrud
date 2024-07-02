const pool = require('../config/database');

class ItemDao {
  static async create(item) {
    const { name, description } = item;
    const res = await pool.query('INSERT INTO items (name, description) VALUES ($1, $2) RETURNING *', [name, description]);
    return res.rows[0];
  }

  static async findAll() {
    const res = await pool.query('SELECT * FROM items');
    return res.rows;
  }

  static async findById(id) {
    const res = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
    return res.rows[0];
  }

  static async update(id, item) {
    const { name, description } = item;
    const res = await pool.query('UPDATE items SET name = $1, description = $2 WHERE id = $3 RETURNING *', [name, description, id]);
    return res.rows[0];
  }

  static async delete(id) {
    await pool.query('DELETE FROM items WHERE id = $1', [id]);
  }
}

module.exports = ItemDao;
