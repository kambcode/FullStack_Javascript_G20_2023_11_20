## Tarea: Implementar un componente de reloj en tiempo real

### Explicación:
Esta tarea tiene como objetivo crear un componente de reloj que muestre la hora actual y se actualice cada segundo. A través de esta tarea, podrás comprender cómo utilizar los hooks useState y useEffect para manejar estados y efectos secundarios en componentes funcionales de React.

### Pasos a seguir:

1. Creación del componente de reloj:

Crea un nuevo archivo llamado Reloj.js dentro del directorio src/components.
Abre el archivo Reloj.js en tu editor de código.
Implementación del componente de reloj:

2. Implementa el componente Reloj de la siguiente manera:

```
import React, { useState, useEffect } from 'react';

function Reloj() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  return <p>{hora}</p>;
}

export default Reloj;
```

3. Integración del componente en App.js:

Abre el archivo App.js en el directorio src.
Importa y utiliza el componente Reloj dentro de App:
```
import React from 'react';
import Reloj from './components/Reloj';

function App() {
  return (
    <div>
      <h1>Reloj en Tiempo Real</h1>
      <Reloj />
    </div>
  );
}

export default App;
```

4. Ejecución del proyecto:

Guarda todos los cambios realizados.
Ejecuta el proyecto de React utilizando el comando npm start.
Visita http://localhost:3000 en tu navegador para ver el resultado de la aplicación.

Con estos pasos, habrás creado un componente de reloj en tiempo real que se actualiza cada segundo. Este ejercicio te ayudará a comprender cómo trabajar con estados y efectos en componentes funcionales de React utilizando los hooks useState y useEffect.