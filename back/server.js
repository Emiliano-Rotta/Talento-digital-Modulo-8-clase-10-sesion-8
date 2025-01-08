const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
// const protectedRoutes = require('./routes/protectedRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/auth', authRoutes);
// app.use('/protected', protectedRoutes);

// app.use(express.static('frontend'));

// Iniciar servidor
const PORT =  3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
