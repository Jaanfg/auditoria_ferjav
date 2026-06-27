# Resumen de la Auditoría: FarmaSalud

El presente informe detalla la auditoría de seguridad web realizada al portal de clientes de **FarmaSalud**, una reconocida cadena de farmacias. 

Este portal web es una plataforma crítica para la organización ya que permite a los clientes acceder a servicios personalizados y gestionar información altamente sensible.

Durante la evaluación se identificaron tres vulnerabilidades de severidad crítica y alta (Inyección SQL, Inyección de Comandos y XSS Reflejado) que comprometen la confidencialidad de los historiales médicos y la disponibilidad de la plataforma de ventas. En respuesta a eso, este documento presenta una priorización de riesgos basado en su impacto y puntaje CVSS, también propone controles técnicos sustentados en los marcos **OWASP y NIST** y establece un plan de recuperación y mejoras para garantizar la continuidad del portal.

### Activos de Información Críticos:
* **Recetas y Salud:** Historial médico y recetas.
* **Fidelización:** Puntos acumulados y beneficios del programa.
* **Datos de Clientes:** Información personal y de contacto.