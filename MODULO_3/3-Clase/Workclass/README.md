## Comandos avanzados

- git fetch
- git branch 
- git merge
- git revert

#### Cómo descargar una branch 
- git fetch origin nombre-de-la-rama (descargar la rama en local)
- git checkout nombre-de-la-rama

#### listar branches
- git branch -a

#### borrar una branch
- git branch -D

#### Cómo hacer merge (integrar) una rama en otra
- git merge nombre-de-la-rama-a-integrar
- git merge --continue (Terminar proceso)
- git merge --abort (cancelar el proceso)

#### salir de la terminal de commit: 
- Oprime esc
- Escribe :qa
- Enter

#### revertir commits
- git revert codigo-del-comit (lo puedo ver con git log)