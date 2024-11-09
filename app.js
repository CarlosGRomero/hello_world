const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 80;
const environment = process.env.NODE_ENV || 'development';
app.listen(port, () => {
  console.log(`Server running in ${environment} mode at http://localhost:${port}/`);
});
