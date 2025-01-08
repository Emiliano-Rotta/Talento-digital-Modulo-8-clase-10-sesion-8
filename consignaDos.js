// Ejercicio 2: Generar y verificar un JWT con autenticación basada en correo electrónico (Backend y Almacenamiento Seguro)
// Consigna:

// Crea un sistema con los siguientes requisitos:

// Generación de Token:
// Permite a un usuario iniciar sesión con su correo electrónico y contraseña.
// Una vez validado, genera un token JWT.

// En el Payload del token:
// sub: ID del usuario.
// email: Correo electrónico del usuario.
// iat: Fecha de emisión del token.
// exp: Expiración del token (1 hora desde su emisión).

// Usa el algoritmo de encriptación HS256.

// Almacenamiento seguro:
// Almacena el token generado en LocalStorage después de que el usuario se haya autenticado correctamente.
// Los datos almacenados deben estar en el navegador, accesibles solo desde el lado del cliente.

// Protección de Rutas:
// Implementa un middleware en el backend para verificar que el token esté presente y sea válido antes de permitir el acceso a un recurso protegido.
// Si el token es válido, permite el acceso al recurso; si no, devuelve un error de autenticación.

// Revisión del Token:
// Verifica el token en el backend cada vez que se quiera acceder a un recurso protegido usando el token almacenado.


// Estructura de Archivos

// /backend
//     /controllers
//       authController.js
//       protectedController.js
//     /middleware
//       authMiddleware.js
//     /models
//       userModel.js
//     /routes
//       authRoutes.js
//       protectedRoutes.js
//     server.js
//     .env
//   /frontend
//     /assets
//       style.css
//     /index.html
//     /app.js
