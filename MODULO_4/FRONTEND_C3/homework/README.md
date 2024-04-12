## Tarea: Dividir el proyecto en al menos tres componentes nuevos: Titulo, Imagen y Biografía

### Explicación:
Esta tarea tiene como objetivo expandir el proyecto anterior mediante la creación de tres componentes nuevos en lugar de mostrar toda la información en un solo componente. A través de esta tarea, podrás comprender cómo trabajar con props y estados en los componentes de React, así como el ciclo de vida de un componente.

### Pasos a seguir:

1. Creación de los componentes:

En el directorio src, crea una nueva carpeta llamada components.
Dentro de la carpeta components, crea tres archivos nuevos: Titulo.js, Imagen.js y Biografia.js.

2. Implementación de los componentes:

Abre cada archivo creado (Titulo.js, Imagen.js y Biografia.js) en tu editor de código.

Implementa cada componente de la siguiente manera:

Titulo.js:
```
import React from 'react';

function Titulo() {
  return <h1>Artista/Cantante Favorito</h1>;
}

export default Titulo;
```

Imagen.js:
```
import React from 'react';

function Imagen() {
  return <img src="url-de-la-foto-del-artista" alt="Foto del artista" />;
}

export default Imagen;
```

Biografia.js:
```
import React from 'react';

function Biografia() {
  return (
    <p>
      Breve biografía o descripción del artista/cantante favorito.
      Puedes incluir detalles como su nombre, género musical, logros, etc.
    </p>
  );
}
export default Biografia;
```

3. Integración de los componentes en App.js:

Abre el archivo App.js en el directorio src.
Modifica el contenido del componente App para utilizar los nuevos componentes Titulo, Imagen y Biografia:
```
import React from 'react';
import Titulo from './components/Titulo';
import Imagen from './components/Imagen';
import Biografia from './components/Biografia';

function App() {
  return (
    <div>
      <Titulo />
      <Imagen />
      <Biografia />
    </div>
  );
}

export default App;
```

4. Ejecución del proyecto:

Guarda todos los cambios realizados.
Ejecuta el proyecto de React utilizando el comando npm start.

Visita http://localhost:3000 en tu navegador para ver el resultado de la aplicación.
¡Con estos pasos, habrás dividido el proyecto en tres componentes nuevos y aprendido cómo integrarlos en la aplicación de React! Este enfoque te ayudará a comprender mejor el concepto de componentización y cómo trabajar con props y estados en React.