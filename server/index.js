const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const axios = require('axios');

const app = express();
const port = 3099;
const hostname = 'http://34.228.73.56:3000'

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api/totalScore/:product_id', createProxyMiddleware({ target: hostname, changeOrigin: true }));
app.use('/api/reviewCount/:product_id', createProxyMiddleware({ target: hostname, changeOrigin: true }));
// app.use('/:product_id', createProxyMiddleware({ target: hostname, changeOrigin: true}));

app.get('/:product_id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening at: ${port}`);
});
