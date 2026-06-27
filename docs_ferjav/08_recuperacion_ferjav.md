# Mejora Tecnológica y Recuperación - FarmaSalud

## 1. Mejora Tecnológica Propuesta
* **Implementación de WAF:** Desplegar un Web Application Firewall para filtrar tráfico malicioso y detectar patrones de Inyección SQL y XSS antes de que alcancen el portal de clientes.
* **Auditoría de Base de Datos:** Implementar un monitoreo activo sobre las tablas de recetas médicas y fidelización para detectar extracciones anómalas de información.
* **Segmentación de Red:** Aislar el servidor web de la base de datos principal en redes virtuales distintas para contener el movimiento en caso de que un atacante logre una inyección de comandos.

## 2. Plan de Recuperación ante Desastres
* **Respaldos de Datos de Salud:** Ejecutar backups diarios y semanales de la base de datos. Estos respaldos deben almacenarse en una ubicación externa y de forma cifrada.
* **Redundancia y Alta Disponibilidad:** Establecer una infraestructura en la nube que permita levantar servidores de contingencia rápidamente asegurando que la venta de medicamentos y el acceso a las recetas no se interrumpan en caso de compromiso del servidor principal.
* **Procedimiento de Restauración:** Realizar simulacros y pruebas mensuales de restauración de los respaldos para garantizar que el tiempo objetivo de recuperación cumpla con los estándares de la industria.
* **Plan de Notificación:** Establecer un protocolo formal de comunicación para alertar inmediatamente al equipo de respuesta, a las autoridades y a los pacientes afectados en caso de confirmarse una brecha de datos cumpliendo con la normativa de privacidad.