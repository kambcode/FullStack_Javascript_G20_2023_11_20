## Tarea: Crear un formulario de inicio de sesión con validación

### Explicación:
Esta tarea consiste en crear un formulario de inicio de sesión que valide el nombre de usuario y la contraseña ingresados por el usuario. A través de esta tarea, aprenderás a manejar formularios en React y a realizar la validación de datos de entrada del usuario.

### Pasos a seguir:

1. Creación del componente de formulario de inicio de sesión:

 - Crea un nuevo archivo llamado LoginForm.js dentro del directorio src/components.
 - Abre el archivo LoginForm.js en tu editor de código.
 - Implementación del componente de formulario:

2. Implementa el componente LoginForm de la siguiente manera:
```
import React, { useState } from 'react';

function LoginForm() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación de nombre de usuario y contraseña
    if (usuario.trim() === '' || contrasena.trim() === '') {
      setError('Por favor, completa todos los campos.');
      return;
    }
    // Lógica de autenticación (simulada)
    if (usuario === 'usuario' && contrasena === 'contraseña') {
      setError('');
      alert('Inicio de sesión exitoso!');
    } else {
      setError('Nombre de usuario o contraseña incorrectos.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Usuario:</label>
        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default LoginForm;
```

3. Integración del componente en App.js:

Abre el archivo App.js en el directorio src.
Importa y utiliza el componente LoginForm dentro de App:
```
import React from 'react';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default App;
```

4. Ejecución del proyecto:

Guarda todos los cambios realizados.
Ejecuta el proyecto de React utilizando el comando npm start.
Visita http://localhost:3000 en tu navegador para ver el formulario de inicio de sesión.

Con estos pasos, habrás creado un formulario de inicio de sesión que valida el nombre de usuario y la contraseña ingresados por el usuario. Esta tarea te permitirá practicar el manejo de formularios en React y la validación de datos de entrada del usuario.