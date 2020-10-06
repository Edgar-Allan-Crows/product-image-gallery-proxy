const express = require('express');
const path = require('path');

const app = express();
const port = 3099;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`Server is listening at: ${port}`);
});