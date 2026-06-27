# Matriz de Riesgo y Mapa de Calor

La siguiente matriz de riesgo evalúa las vulnerabilidades encontradas en el portal de FarmaSalud mediante la fórmula **Riesgo = Probabilidad × Impacto**. Se utiliza una escala de 1 a 3 para ambos ejes:

* **Probabilidad:** Baja (1), Media (2), Alta (3)
* **Impacto:** Bajo (1), Medio (2), Alto (3)

## Ubicación en el Mapa de Calor
* **Inyección SQL:** Probabilidad Alta (3) × Impacto Alto (3) = **Nivel 9 (Crítico - Rojo)**
  * *Justificación* El impacto es máximo porque expone el activo más crítico de FarmaSalud, que incluye historiales médicos, recetas de enfermedades crónicas y datos personales de pacientes, lo que derivaría en duras demandas legales.
* **Inyección de Comandos:** Probabilidad Alta (3) × Impacto Alto (3) = **Nivel 9 (Crítico - Rojo)**
  * *Justificación de Industria:* Permite el secuestro total del servidor paralizando por completo la pasarela de pagos y la operatividad de venta de medicamentos.
* **XSS Reflejado:** Probabilidad Alta (3) × Impacto Medio (2) = **Nivel 6 (Alto - Naranja)**
  * *Justificación de Industria:* El impacto es medio ya que no compromete la base de datos central de FarmaSalud pero permite robar sesiones de clientes afectando la integridad de sus beneficios en el sistema de fidelización.

## Priorización y Justificación
1. **Nivel 9 - Inyección de Comandos e Inyección SQL:** Ambas presentan una Probabilidad Alta (3) al ser fácilmente explotables sin autenticación previa y un Impacto Alto (3) ya que permiten el compromiso total de la base de datos de pacientes y el control absoluto del servidor de FarmaSalud. Son de resolución crítica e inmediata. **Lo cual es completamente coherente con sus altos puntajes técnicos CVSS de 9.8 y 7.5 respectivamente.**
2. **Nivel 6 - XSS Reflejado:** Presenta una Probabilidad Alta (3) por la falta de sanitización en las entradas del portal web pero un Impacto Medio (2) ya que el ataque requiere engañar al usuario para robar su sesión limitando el daño a usuarios individuales y no a la infraestructura completa. **Este riesgo de nivel medio se alinea perfectamente con su puntaje técnico CVSS de 6.1.**

