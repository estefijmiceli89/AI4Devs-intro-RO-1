// Seleccionar elementos del DOM
const inputText = document.getElementById('input-text');
const reverseBtn = document.getElementById('reverse-btn');
const resultDiv = document.getElementById('result');
const copyBtn = document.getElementById('copy-btn');

// Función para invertir la cadena de texto
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Función para procesar y mostrar el texto invertido
function processText() {
    // Obtener el texto ingresado
    const text = inputText.value;
    
    // Mostrar u ocultar el botón de Reverse dependiendo de la longitud del texto
    if (text.length > 3) {
        reverseBtn.style.display = 'inline-block';
    } else {
        reverseBtn.style.display = 'none';
    }
    
    // Invertir el texto
    const reversedText = reverseString(text);
    
    // Mostrar el resultado
    resultDiv.textContent = reversedText;
    
    // Mostrar el botón de copiar si hay resultado
    if (reversedText) {
        copyBtn.style.display = 'inline-block';
    } else {
        copyBtn.style.display = 'none';
    }
}

// Evento para detectar cambios en el input en tiempo real
inputText.addEventListener('input', processText);

// Mantener el evento para el botón "Reverse" por si el usuario quiere usarlo
reverseBtn.addEventListener('click', processText);

// Evento para el botón "Copy"
copyBtn.addEventListener('click', function() {
    // Crear un elemento de texto temporal
    const tempInput = document.createElement('textarea');
    tempInput.value = resultDiv.textContent;
    
    // Añadir el elemento al DOM
    document.body.appendChild(tempInput);
    
    // Seleccionar y copiar el texto
    tempInput.select();
    document.execCommand('copy');
    
    // Eliminar el elemento temporal
    document.body.removeChild(tempInput);
    
    // Opcional: Dar feedback al usuario
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    
    setTimeout(function() {
        copyBtn.textContent = originalText;
    }, 1500);
});

// También podemos hacer que el botón de Reverse se active al presionar Enter en el input
inputText.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        processText();
    }
});