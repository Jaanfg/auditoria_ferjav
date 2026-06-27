# Políticas de Prevención y Controles de Mitigación - FarmaSalud

Para proteger los activos críticos de la empresa y remediar las vulnerabilidades halladas, se establecen las siguientes directrices:

## 1. Políticas de Prevención (Para los riesgos priorizados)
* **Desarrollo Seguro:** Todo el equipo de ingeniería de la plataforma web debe programar bajo los estándares de seguridad OWASP (Open Worldwide Application Security Project).
* **Privacidad por Diseño:** Los historiales médicos de las recetas y los rut de los pacientes deben cifrarse ya sea que los datos estén siendo transferidos o almacenados.
* **Principio de Menor Privilegio:** Las aplicaciones web solo deben conectarse a la base de datos con usuarios de permisos restringidos prohibiendo el uso de cuentas root.

## 2. Controles de Mitigación (Para riesgos Rojos/Naranjos)
* **Para Inyección SQL (Riesgo Rojo - Nivel 9):** Obligar al uso de consultas parametrizadas en todas las consultas a la base de datos transaccional de pacientes en alineación con el marco de ciberseguridad **OWASP**.
* **Para XSS Reflejado (Riesgo Naranja - Nivel 6):** Aplicar output encoding y desplegar políticas estrictas de Content Security Policy en los navegadores para bloquear el robo de sesiones del sistema de fidelización como referencian las normativas de **OWASP**.
* **Para Inyección de Comandos (Riesgo Rojo - Nivel 9):** Prohibir el paso de datos del usuario directamente al sistema operativo del servidor web utilizando en su lugar listas blancas estrictas y librerías nativas implementando controles de aislamiento del marco **NIST**.
