const express = require ('express');
const app = express();
const port = 3000;

app.use(express.json());

let items = [];

app.get('/', (req, res) =>{
    res.send('Hola, soy yo y mi primera API');
});

// Create, o POST para crear 
app.post('/items', (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).send(item);
});

// Read, o GET para listar
app.get('/items', (req, res) => {
    res.send(items);
});

// Update
app.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const newItem = req.body;
    items = items.map(item => item.id == id ? newItem : item);
    res.send(newItem);
});
  
  // Delete
  app.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    items = items.filter(item => item.id != id);
    res.status(204).send();
  });

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
});

