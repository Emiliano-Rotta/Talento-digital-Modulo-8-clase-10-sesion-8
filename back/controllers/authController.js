const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Simulación de base de datos de usuarios
const users = [
  { id: 1, email: 'user@example.com', password: bcrypt.hashSync('password123', 10) } //de esta forma encriptamos la contraseña
];

const loginUser = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).send('Invalid credentials');

  if (!bcrypt.compareSync(password, user.password)) {  //desencriptamos la contraseña
    return res.status(401).send('Invalid credentials');
  }

  const token = jwt.sign(
    { sub: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h', iat: Math.floor(Date.now() / 1000) }
  );

  res.json({ token });
};

module.exports = { loginUser };
