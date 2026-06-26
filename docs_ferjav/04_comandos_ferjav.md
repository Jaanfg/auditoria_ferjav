# Vulnerabilidad 3: Inyección de Comandos

## Evidencia y Payload
Comandos del sistema operativo concatenados a una IP válida:
`127.0.0.1; cat /etc/passwd`

![Evidencia Comandos](img_ferjav/comandos_ferjav.png)

## Por qué funciona
La aplicación pasa la entrada directamente a la terminal del sistema sin filtros. El carácter `;` actúa como separador ejecutando el segundo comando.

## CVSS, Prevención y Mitigación
* **Puntaje CVSS 3.1:** 9.8 (Crítico)
* **Defensa:** Emplear listas blancas estrictas y utilizar APIs seguras nativas del lenguaje en lugar de invocar la terminal del sistema operativo.
* **Mitigación (NIST / OWASP):** Basado en los controles de NIST y OWASP, el servidor web debe ejecutarse con una cuenta de sistema operativo sin privilegios administrativos. Por lo tanto, si un atacante logra inyectar un comando, no podrá tomar el control total de la infraestructura.

### Resumen de Severidad CVSS 3.1 (Escala 0-10)

A continuación, se presenta la evaluación estandarizada de las vulnerabilidades explotadas:

| Vulnerabilidad | Puntaje CVSS 3.1 | Nivel de Severidad |
| :--- | :---: | :---: |
| **Inyección de Comandos** | 9.8 | Crítico |
| **Inyección SQL** | 7.5 | Alto |
| **XSS Reflejado** | 6.1 | Medio |