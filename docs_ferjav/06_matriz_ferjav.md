# Matriz de Riesgo y Mapa de Calor

La siguiente matriz de riesgo evalúa las vulnerabilidades encontradas en el portal de FarmaSalud mediante la fórmula **Riesgo = Probabilidad × Impacto**. Se utiliza una escala de 1 a 3 para ambos ejes:

* **Probabilidad:** Baja (1), Media (2), Alta (3)
* **Impacto:** Bajo (1), Medio (2), Alto (3)

## Ubicación en el Mapa de Calor
* **Inyección SQL:** Probabilidad Alta (3) × Impacto Alto (3) = **Nivel 9 (Crítico - Rojo)**
* **Inyección de Comandos:** Probabilidad Alta (3) × Impacto Alto (3) = **Nivel 9 (Crítico - Rojo)**
* **XSS Reflejado:** Probabilidad Alta (3) × Impacto Medio (2) = **Nivel 6 (Alto - Naranja)**

## Priorización y Justificación
1. **Nivel 9 - Inyección de Comandos e Inyección SQL:** Ambas presentan una Probabilidad Alta (3) al ser fácilmente explotables sin autenticación previa y un Impacto Alto (3) ya que permiten el compromiso total de la base de datos de pacientes y el control absoluto del servidor de FarmaSalud. Son de resolución crítica e inmediata.
2. **Nivel 6 - XSS Reflejado:** Presenta una Probabilidad Alta (3) por la falta de sanitización en las entradas del portal web pero un Impacto Medio (2) ya que el ataque requiere engañar al usuario para robar su sesión limitando el daño a usuarios individuales y no a la infraestructura completa.

