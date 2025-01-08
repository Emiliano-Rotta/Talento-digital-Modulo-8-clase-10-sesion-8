const protectedData = (req, res) => {
    res.json({ message: `Hello, ${req.user.email}! You have access to protected data.` });
  };
  
  module.exports = { protectedData };
  