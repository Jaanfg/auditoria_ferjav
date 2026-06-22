# Matriz de Riesgo - FarmaSalud

Para priorizar las vulnerabilidades encontradas, se evalúa la probabilidad de ocurrencia frente al impacto en FarmaSalud.

## 1. Inyección SQL (Base de Datos de Salud)
* **Probabilidad:** Media (Requiere conocimiento de la estructura pero el campo es fácilmente accesible).
* **Impacto:** Alto (Exposición total de historiales médicos y recetas violando gravemente la privacidad de los pacientes).
* **Nivel de Riesgo:** Riesgo Crítico.

## 2. Inyección de Comandos (Servidor Web)
* **Probabilidad:** Baja (Requiere acceso a herramientas específicas de red desde el portal).
* **Impacto:** Alto (Compromiso total del servidor, posible ransomware o interrupción del servicio de venta).
* **Nivel de Riesgo:** Riesgo Alto.

## 3. XSS Reflejado (Sistema de Fidelización)
* **Probabilidad:** Alta (Fácil de automatizar y engañar a usuarios enviando links maliciosos).
* **Impacto:** Medio (Afecta sesiones individuales y robo de puntos pero no derriba el servidor).
* **Nivel de Riesgo:** Riesgo Alto.