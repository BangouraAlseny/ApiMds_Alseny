const express = require('express');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../Config/jwt');
const users = require('../Config/users');

const router = express.Router();

router.post('/auth/login', (req, res, next) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === 'john' && u.password === "123456");

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id }, jwtSecret);

  res.json({ token });
});

module.exports = router;
