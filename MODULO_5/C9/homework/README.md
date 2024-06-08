### Tarea: Desarrollo de endpoints para operaciones de Países y Continentes

#### Descripción:
Utilizando los conocimientos adquiridos en clase sobre Node.js, Express y el desarrollo de API RESTful, se te pide que amplíes el proyecto existente para incluir endpoints relacionados con países y continentes. Deberás implementar operaciones de CRUD (Crear, Leer, Actualizar, Eliminar) tanto para países como para continentes.

#### Requisitos:
1. Utiliza el mismo proyecto Node.js existente, con la estructura de carpetas y archivos establecida en clase.
2. Implementa los siguientes endpoints para países y continentes:
   - **Países:**
     - `GET /countries`: Obtener la lista de todos los países.
     - `GET /countries/:id`: Obtener los detalles de un país específico por su ID.
     - `POST /countries`: Crear un nuevo país.
     - `PUT /countries/:id`: Actualizar los detalles de un país existente por su ID.
     - `DELETE /countries/:id`: Eliminar un país por su ID.
   - **Continentes:**
     - `GET /continents`: Obtener la lista de todos los continentes.
     - `GET /continents/:id`: Obtener los detalles de un continente específico por su ID.
     - `POST /continents`: Crear un nuevo continente.
     - `PUT /continents/:id`: Actualizar los detalles de un continente existente por su ID.
     - `DELETE /continents/:id`: Eliminar un continente por su ID.
3. Utiliza objetos en memoria para almacenar la información de países y continentes.
4. Asegúrate de validar los datos de entrada para evitar errores y asegurar la integridad de los objetos en memoria.
5. Implementa middleware de autenticación para proteger las rutas relacionadas con países y continentes.
6. Documenta los endpoints utilizando comentarios claros en el código y especificaciones detalladas en un archivo `README.md`.