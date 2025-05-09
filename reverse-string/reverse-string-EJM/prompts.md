# Prompts utilizados

## Chatbot Utilizado: Claude 3.7 Sonnet

## Prompt Inicial
```
soy qa engineer (entonces de desarrollo no se nada), pero estoy realizando una maestria que se llama ai for devs y tengo que realizar el primer entregable.

el enunciado de la tarea es: Crea una **página web con lógica en javascript que invierta el orden de una cadena de texto**.
Ejemplo: si introduzco `AI4Devs` devuelve `sveD4IA`.
Hazlo apoyado en el seed `index.html` y `script.js` que proporcionamos dentro de la carpeta template. Para entregar, haz una pull request que incluya una carpeta copiada de template, con el nombre `reversestring-iniciales` (ejemplo `reversestring-ARM`). Debe incluir no solo el código generado, sino también, fundamental, **el prompt utilizado y el chatbot utilizado** en `prompts.md`. Si has usado más de un prompt hasta llegar a una solución adecuada, añade todos en orden. Añade además el prompt final en el comentario del pull request.

aqui la url del repositorio: https://github.com/LIDR-academy/AI4Devs-intro-RO-1/tree/main/reverse-string

te adjunto una imagen ejemplo de la pagina web deseada
```

La imagen adjunta mostraba la interfaz de usuario con un campo de texto, un botón "Reverse" y el resultado invertido con un botón "Copy".

## Prompt de funcionalidades adicionales
```
ahora quiero implementar los siguientes dos puntos de la tarea solicitada:
**Si lograste alcanzar a cumplir el objetivo del reto sin problemas y quieres subir un poco más el nivel, implementa las siguientes funciones: **
* El botón debe aparecer cuando haya texto suficiente, más de 3 letras
* Que te de la cadena en tiempo real, que no dependa del botón.
dame el codigo completo actualizado que incluya ambas cosas
```
