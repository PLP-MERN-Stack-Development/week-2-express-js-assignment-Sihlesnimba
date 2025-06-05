
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const logger = require('./middleware/loggerMiddleware');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
require('dotenv').config();
const app = express();
app.use(logger);
app.use(bodyParser.json());
app.use('/api/products', productRoutes);
app.get('/', (req, res) => { res.send('Hello World'); });
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
