let items = [];

const getItems = (req, res) => {
  const { name } = req.query;
  const filteredItems = name ? items.filter(item => item.name.includes(name)) : items;
  res.json(filteredItems);
};

const createItem = (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
};

const updateItem = (req, res) => {
  const { id } = req.params;
  const updatedItem = req.body;
  items = items.map(item => item.id === id ? updatedItem : item);
  res.json(updatedItem);
};

const deleteItem = (req, res) => {
  const { id } = req.params;
  items = items.filter(item => item.id !== id);
  res.status(204).end();
};

module.exports = { getItems, createItem, updateItem, deleteItem };