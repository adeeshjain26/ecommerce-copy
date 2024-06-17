const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/cart.json', (req, res) => {
  fs.readFile(path.join(__dirname, 'public', 'cart.json'), 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send("Failed to read cart data.");
    } else {
      res.send(JSON.parse(data));
    }
  });
});

app.post('/save-cart', (req, res) => {
  const cart = req.body;
  fs.writeFile(path.join(__dirname, 'public', 'cart.json'), JSON.stringify(cart, null, 2), (err) => {
    if (err) {
      res.status(500).send("Failed to save cart data.");
    } else {
      res.send("Cart data saved.");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
