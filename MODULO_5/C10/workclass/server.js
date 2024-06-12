const express = require('express');
const app = express();
const apiRoutes = require('./src/routes/api');
// const dotenv = require('dotenv');

app.use('/api', apiRoutes);

// dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});