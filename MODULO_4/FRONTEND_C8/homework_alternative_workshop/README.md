## Tarea: Creación de tu propio portafolio (Parte 2)

### Explicación:
En esta tarea vamos a incluir un contexto global para tu protafolio.

### Pasos:

1. Crear Contexto Global:

- Define un nuevo contexto utilizando la función React.createContext(). Esto se hace normalmente en un archivo separado que servirá como el proveedor de contexto.

``` javascript
// GitHubProjectsContext.js
import React from 'react';

const GitHubProjectsContext = React.createContext();

export default GitHubProjectsContext;
```

- Crear un archivo separado para el contexto, como GitHubProjectsContext.js.

2. Definir Proveedor:  Crea un componente que actuará como el proveedor del contexto. Este componente contendrá el estado y las funciones que deseas compartir con los componentes hijos.

```javascript
// GitHubProjectsContextProvider.js
import React, { useState, useEffect } from 'react';
import GitHubProjectsContext from './GitHubProjectsContext';

const GitHubProjectsContextProvider = ({ initialValue, children }) => {
  const [data, setData] = useState(null);

  const updateData = (newValue) => {
    setData(newValue);
  };

  useEffect(() => {
    updateData(initialValue);
  }, [initialValue])

  return (
    <GitHubProjectsContextProvider.Provider value={{ data, updateData }}>
      {children}
    </GitHubProjectsContextProvider.Provider>
  );
};

export default MyContextProvider;
```

3. Consumir el contexto: En los componentes hijos que necesiten acceder al contexto, utiliza el componente GitHubProjectsContext.Consumer o el hook useContext. 

``` javascript
import React, { useContext } from 'react';
import GitHubProjectsContext from './GitHubProjectsContext';

const ChildComponent = () => {
  const { data } = useContext(GitHubProjectsContext);
  return (
    <div>
      <p>Data from context: {JSON.stringify(data)}</p>
    </div>
  );
};

export default ChildComponent;
```

**NOTA**: El código anterior es solo un ejemplo de cómo usar el contexto, en este caso ChildComponent representa al componente que debe acceder a la información de el contexto, ese nombre cambiará dependiendo de tu proyecto y de tu implementación (puedes acceder al contexto en uno o más componentes)

4. Proveer el contexto: Envuelve tu aplicación con el proveedor del contexto para que los componentes hijos puedan acceder a él.

``` javascript
// App.js
import React from 'react';
import MyContextProvider from './MyContextProvider';
import ChildComponent from './ChildComponent';

const App = () => {
    const [gitHubData, setGitHubData] = useState();
    //TODO: Aca debes hacer la consulta de tus proyectos de GIT (usando la API de la tarea pasada), y almacenar esa información en la variable de estado gitHubData que despues será pasada como valor incial a tu contexto
    return (
        <MyContextProvider initialValue={gitHubData}>
        <ChildComponent />
        </MyContextProvider>
    );
};

export default App;
```