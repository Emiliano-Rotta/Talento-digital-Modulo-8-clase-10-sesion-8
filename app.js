// npm install jsonwebtoken

const jwt = require('jsonwebtoken');
require('dotenv').config();
const token = jwt.sign({ sub: user.id, role: user.role }, 'mySecretKey', { expiresIn: '1h' });

jwt.verify(token, 'mySecretKey', (err, decoded) => {
    if (err) return console.error('Invalid token');
    console.log(decoded);
  });
  
