# Bitácora de Uso de IA

## 1. Uso de la Calculadora CVSS 3.1
* **Herramienta:** Google Gemini.
* **Prompt utilizado:** "Actúa como auditor experto. Necesito evaluar el nivel de riesgo de Inyección SQL, XSS Reflejado e Inyección de Comandos usando la calculadora oficial: https://www.first.org/cvss/calculator/3.1. Indícame qué métricas debo seleccionar para cada ataque. Justifica cada elección considerando el contexto de FarmaSalud, una plataforma que almacena recetas médicas y datos de salud para determinar el impacto real en confidencialidad, integridad y disponibilidad."
* **Qué se aceptó y qué se corrigió:** Se aceptaron las justificaciones teóricas sobre cómo Inyección de Comandos afecta totalmente la disponibilidad e integridad del servidor. Sin embargo, se debió corregir manualmente la métrica de "Privileges Required" en algunos ataques ya que la IA asumió por error un ataque autenticado. Al estar el entorno DVWA configurado en nivel Low, el ataque se realizó sin validaciones previas por lo que se ajustó a "None" en la calculadora real.

## 2. Asistencia en el Diseño de la Interfaz
* **Herramienta:** Google Gemini.
* **Prompt utilizado:** "Tengo que presentar la Matriz de Riesgo de mi auditoría en una aplicación React. Escribe la estructura de un componente usando Tailwind CSS que dibuje una tabla tipo 'Mapa de Calor' usando colores de fondo verde, amarillo, naranja y rojo para cruzar los niveles de probabilidad e impacto"
* **Qué se aceptó y qué se corrigió:** Se aceptó la estructura de la tabla y las clases de color de Tailwind (`bg-red-600`, `bg-yellow-200`, etc.) que me ahorraron mucho tiempo. Sin embargo, se corrigió manualmente la ubicación de las vulnerabilidades dentro de las celdas ya que la IA ubicó los ataques al azar y no respetaba el análisis hecho para FarmaSalud.

## 3. Resolución de ReferenceError
* **Herramienta:** Google Gemini.
* **Prompt utilizado:** "Tengo una pantalla en blanco en mi aplicación React. En la consola del navegador me sale el error: 'Uncaught ReferenceError: Layout is not defined' en el archivo Prompts.jsx. ¿Cómo lo soluciono?"
* **Qué se aceptó y qué se corrigió:** Se aceptó el diagnóstico de la IA que identificó que el componente intentaba renderizar la etiqueta del ícono sin haberla importado previamente. Se aplicó la solución agregando 'Layout' dentro de las llaves del import de 'lucide-react' en la línea 1.

## 4. Rediseño Corporativo, Índice y Firma 3D
* **Herramienta:** Google Gemini.
* **Prompt utilizado:** "Ayúdame a rediseñar mi proyecto en React con tonos que le den una imagen más corporativa a FarmaSalud. Agrégale un índice lateral y una tarjeta como firma al final que gire en 3D al hacerle click para mi correo electrónico y GitHub"
**Qué se aceptó y qué se corrigió:** Se aceptó el código base del diseño y la animación en 3D de mi firma. Sin embargo, modifiqué el archivo Indice.jsx para ponerle "Módulo de Seguridad" como título a la sección del índice para que sea mucho más adecuado y ajusté los efectos al pasar el mouse por encima de los enlaces.

## 5. Depuración de Pantalla en Blanco por Ícono de GitHub
* **Herramienta:** Google Gemini.
* **Prompt utilizado:** "Tras agregar la firma y revisar el localhost se ve la pantalla en blanco así que hice click en inspeccionar la página para revisar la consola y saber el error. Me indica 'Uncaught SyntaxError: The requested module http://localhost:5173/node_modules/.vite/deps/lucide-react.js?v=934ec8b8 doesn't provide an export named: Github'. Intenté solucionándolo cambiando la letra h de Github a mayúscula pero aún así no funciona. ¿Qué puedo hacer?"
* **Qué se aceptó y qué se corrigió:** Se aceptó hacer ciertas correcciones propuestas por la IA como cambiar el ícono de Github por el de Globe. Al realizar este cambio en el import y etiqueta del componente, la pantalla volvió a cargar correctamente.

## Reflexión Final

Desarrollar esta auditoría para FarmaSalud me dejó una gran lección. La IA ayuda muchísimo a maquetar rápido en React y crear estructuras visuales como la firma en tarjeta 3D pero no se puede confiar ciegamente. La IA no entiende el contexto real del negocio, calculó mal el impacto en el CVSS porque no sabía que yo estaba auditando un entorno DVWA en nivel bajo ubicó las vulnerabilidades en la matriz de riesgo al azar sin considerar los datos críticos médicos que maneja la plataforma. Además, a nivel de código, si yo no supiera leer la consola del navegador o entender de dependencias, no habría podido resolver los fallos de compilación que dejaban la interfaz en blanco por errores generados por la IA, como proporcionarme un ícono que ya fue eliminado en la nueva versión de la librería o escribir mal la sintaxis de Tailwind. En conclusión, la IA es una excelente herramienta para agilizar la escritura de código pero la responsabilidad de diseñar la arquitectura, depurar los errores y aplicar el criterio recae en uno mismo.