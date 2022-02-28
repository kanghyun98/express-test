import express from 'express';
import dotenv from 'dotenv';

import db from '../models';

dotenv.config();

const prod: boolean = process.env.NODE_ENV === 'production';
const app = express();
app.set('port', prod ? process.env.PORT : 3065);

db.sequelize
  .sync() // { force: true }
  .then(() => {
    console.log('db연결 성공!');
  })
  .catch(console.error);

app.listen(app.get('port'), () => {
  console.log(`server is running on ${app.get('port')}`);
});
