// Función para iniciar sesión y almacenar el JWT
const login = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
  
    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('token', token); // Guardar el token en LocalStorage
      alert('Inicio de sesión exitoso');
    } else {
      alert('Credenciales incorrectas');
    }
  };
  
  // Función para obtener datos protegidos
  const fetchProtectedData = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('No has iniciado sesión');
      return;
    }
  
    const response = await fetch('http://localhost:3000/protected/data', {
      method: 'GET',
      headers: { 'Authorization': token }
    });
  
    if (response.ok) {
      const data = await response.json();
      document.getElementById('protected-data').innerText = data.message;
    } else {
      alert('No autorizado');
    }
  };
  
  // Event listeners
  document.getElementById('login-btn').addEventListener('click', login);
  document.getElementById('fetch-data-btn').addEventListener('click', fetchProtectedData);
  