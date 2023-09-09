const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routers/auth');
const moviesRoutes = require('./routers/movies');

const app = express();
// Poner en archivo de configuracion
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/movies', moviesRoutes);

mongoose.connect('mongodb://127.0.0.1/movies', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.listen(port, () => console.log(`app listening on port ${port}!`));