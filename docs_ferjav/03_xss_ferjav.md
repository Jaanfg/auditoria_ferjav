# Vulnerabilidad 2: XSS Reflejado

## Evidencia y Payload
El ataque se realizó inyectando el siguiente script:
`<script>alert('XSS')</script>`

![Evidencia XSS](img_ferjav/xss_ferjav.png)

## Por qué funciona
La vulnerabilidad ocurre porque la aplicación devuelve el texto introducido por el usuario sin procesarlo, haciendo que el navegador lo ejecute como código.

## CVSS y Prevención
* **Puntaje CVSS 3.1:** 6.1 (Medio)
* **Defensa:** Escapar la salida convirtiendo caracteres especiales (por ej. `<` en `&lt;`) y establecer una Content Security Policy (CSP).