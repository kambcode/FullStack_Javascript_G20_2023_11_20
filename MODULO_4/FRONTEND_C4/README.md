## Hooks y Ciclo de Vida en React

### Ciclo de vida de un componente (Functional Components y Hooks)

Los componentes funcionales en React también pueden tener un ciclo de vida gracias a los hooks. Aunque los hooks no reemplazan por completo a los métodos de ciclo de vida de los componentes de clase, ofrecen una forma más simple y flexible de manejar efectos secundarios y estados en los componentes funcionales.

#### useEffect

`useEffect` es un hook que se utiliza para realizar operaciones secundarias en componentes funcionales. Se ejecuta después de que la renderización es completada, lo que lo hace útil para realizar efectos secundarios como la suscripción a datos externos, la manipulación del DOM y la limpieza de recursos.

```
import React, { useEffect, useState } from 'react';

const MiComponente = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    // Realizar una solicitud HTTP para obtener datos
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setDatos(data));
  }, []);

  return (
    <div>
      {/* Renderizar los datos */}
    </div>
  );
};

export default MiComponente;
```

### useState
useState es un hook que permite añadir estado a componentes funcionales. Toma un valor inicial como argumento y devuelve un array con dos elementos: el estado actual y una función para actualizarlo.

```
import React, { useState } from 'react';

const MiComponente = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
};

export default MiComponente;
```

### useCallback
useCallback es un hook que devuelve una versión memorizada de la función pasada como argumento. Es útil cuando quieres evitar la creación de funciones innecesarias en cada renderizado.

```
import React, { useState, useCallback } from 'react';

const MiComponente = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
};

export default MiComponente;
```

### useMemo
useMemo es un hook que memoriza el resultado de una función y lo devuelve cuando las dependencias especificadas no han cambiado. Es útil para evitar cálculos costosos en cada renderizado.

```
import React, { useState, useMemo } from 'react';

const MiComponente = () => {
  const [datos, setDatos] = useState([]);

  // Calcular el número total de elementos en los datos
  const totalElementos = useMemo(() => {
    return datos.length;
  }, [datos]);

  return (
    <div>
      <p>Total de elementos: {totalElementos}</p>
    </div>
  );
};

export default MiComponente;
```

### useRef
useRef es un hook que devuelve un objeto mutable ref, que puede ser utilizado para almacenar referencias a elementos del DOM, valores mutables y más.

```
import React, { useRef } from 'react';

const MiComponente = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focalizar input</button>
    </div>
  );
};

export default MiComponente;
```

Este es un resumen de los conceptos básicos sobre Hooks y el ciclo de vida en React.

Nota: en un nuevo proyecto de react en caso de no necesitar hacer uso de pruebas pueden borrar los archivos que tengan .test en el nombre, de no hacer uso de los reportWebVitals borrar ese archivo tambien, el logo de react, el manifest..json tambien los pueden eliminar, asegurandose que en los archivos app.js o index,js no se haga uso o eliminar las importaciones en estos para no tener conflictos  