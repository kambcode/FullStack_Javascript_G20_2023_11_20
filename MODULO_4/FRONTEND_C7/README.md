## Taller: Desarrollar un buscador de imágenes con la API de Unsplash

### Explicación:
Esta tarea consiste en crear un buscador de imágenes que utilice la API de búsqueda de imágenes de Unsplash. A través de esta tarea, aprenderás a realizar solicitudes HTTP utilizando Fetch para obtener datos de la API y mostrar los resultados en la interfaz de usuario.

### Pasos a seguir:

1. Obtener una clave de API de Unsplash:

- Visita el sitio web de Unsplash (https://unsplash.com/developers) y crea una cuenta si aún no tienes una.
- Registra una nueva aplicación para obtener una clave de API.

2. Configurar el proyecto:

 - Inicia un nuevo proyecto de React o utiliza uno existente.
 - Abre una terminal en el directorio de tu proyecto.
- Instala la librería Axios para realizar solicitudes HTTP:

```
npm install axios
```

3. Implementar la búsqueda de imágenes:

 - En tu componente principal (App.js o similar), importa Axios y React useState para manejar el estado:
```
import React, { useState } from 'react';
import axios from 'axios';
```

 - Define un estado para almacenar el término de búsqueda y los resultados de la búsqueda:

```
const [query, setQuery] = useState('');
const [results, setResults] = useState([]);
```
 - Implementa una función para manejar la búsqueda de imágenes utilizando la API de Unsplash:
```
const searchImages = async () => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: query,
        per_page: 10,
        client_id: 'TU_CLIENT_ID_DE_UNSPLASH',
      },
    });
    setResults(response.data.results);
  } catch (error) {
    console.error('Error al buscar imágenes:', error);
  }
};
```

 - Crea un formulario de búsqueda en tu interfaz de usuario y vincúlalo a la función searchImages.
4. Mostrar los resultados:

 - Utiliza la lista de resultados almacenada en el estado para mostrar las imágenes en la interfaz de usuario.
 - Cada elemento de la lista debe mostrar la imagen y cualquier información relevante que desees incluir.
5. Estilo y funcionalidades adicionales:

Estiliza tu aplicación para que tenga un aspecto atractivo.
Implementa funcionalidades adicionales según sea necesario, como la paginación de resultados o la visualización de detalles de la imagen al hacer clic en ellas.

Con estos pasos, habrás desarrollado un buscador de imágenes que utiliza la API de búsqueda de imágenes de Unsplash. Esta tarea te permitirá practicar cómo realizar solicitudes HTTP utilizando Fetch y cómo mostrar los resultados en la interfaz de usuario de una aplicación de React.