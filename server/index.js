const express = require('express');
const path = require('path');

const app = express();
const port = 3099;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public/')));

app.get('/:product_id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(port, () => {
  console.log(`Server is listening at: ${port}`);
});