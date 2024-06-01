const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let items = [
    { id: 1, name: 'Item 1', description: 'This is item 1' },
    { id: 2, name: 'Item 2', description: 'This is item 2' }
];

app.get('/items', (req, res) => {
    res.json(items);
});


app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (item) {
      res.json(item);
    } else {
      res.status(404).send('Item not found');
    }
});

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});
  
