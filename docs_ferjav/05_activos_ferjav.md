# Activos de Información y Riesgos

En base a la industria de FarmaSalud, el diseño de la base de datos y la arquitectura del portal custodian los siguientes activos críticos:

## 1. Base de Datos de Salud y Recetas
* **Descripción:** Tablas relacionales que contienen el historial médico de los pacientes, recetas médicas retenidas y tratamientos crónicos.
* **Riesgo:** Extracción no autorizada mediante Inyección SQL.

## 2. Sistema de Fidelización
* **Descripción:** Plataforma que administra los descuentos y beneficios asociados al RUT del cliente.
* **Riesgo:** Robo de tokens de sesión mediante XSS.

## 3. Infraestructura y Datos Personales
* **Descripción:** El servidor web y los registros de clientes (Rut, nombres, direcciones).
* **Riesgo:** Compromiso total del servidor mediante Inyección de Comandos.