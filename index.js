const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const itemRoutes = require('./routes/itemRoutes');
const pool = require('./config/database');

const app = new Koa();

app.use(bodyParser());
app.use(itemRoutes.routes());

const start = async () => {
  try {
    await pool.connect();
    console.log('Database connected');
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

start();