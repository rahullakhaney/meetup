import express from 'express';
import dbConfig from './config/db';

const app = express();

/**
Database
**/

dbConfig();

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } {
    console.log(`App listening on port: ${PORT}`);
  }
});
