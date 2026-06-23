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