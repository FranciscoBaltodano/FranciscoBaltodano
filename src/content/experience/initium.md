---
title: Implementación de Colas para Activación de Cuentas
dates: Octubre 2024 - Noviembre 2024
technologies: [
  "FastAPI",
  "Next",
  "Azure SQL",
  "Azure Queue Storage",
  "Azure Function App",
  "Terraform",
  "SendGrid",
  "GraphQL",
  "Node.js",
  "Express",
  "Apollo Server",
  "Docker"
]
logo: /logos/initium.png
img: /liveDemo/initium.png
description: Sistema para gestionar la activación de cuentas utilizando colas, almacenamiento en Azure y envío de correos electrónicos automatizado mediante Azure Function App y SendGrid.
url:
    gitHub: https://github.com/FranciscoBaltodano/initium-ui
    liveDemo: https://ui-webapp-initium-dev.azurewebsites.net
---

Este proyecto implementa un sistema de activación de cuentas basado en colas y microservicios, garantizando una experiencia de usuario optimizada. A continuación, se describen los módulos y funcionalidades implementadas y pendientes.

## Funcionalidades Desarrolladas

### API y Manejo de Datos
1. **Escritura en Firebase y Azure SQL:**
   - Al registrarse, los datos del usuario son almacenados en Firebase y Azure SQL para garantizar seguridad y accesibilidad.
2. **Generación de Mensajes en Azure Queue Storage:**
   - Cada registro envía un mensaje a la cola con la dirección de correo electrónico del usuario.

### Azure Function App
1. **Lectura de Mensajes desde la Cola:**
   - La Function App monitorea la cola y procesa los mensajes de activación.
2. **Llamada al Endpoint de Generación de Código:**
   - La Function App solicita un código único al backend, asociado a cada usuario.
3. **Envío de Correo Electrónico con SendGrid:**
   - Utiliza SendGrid para enviar correos personalizados con el enlace de activación.

### Pantalla de Activación
- Los usuarios pueden ingresar el código recibido por correo con mensajes claros en caso de errores o códigos expirados.

### Redirección de Usuarios No Activados
- Redirigir al usuario a la pantalla de ingreso de código si intenta iniciar sesión sin activar su cuenta.
- Manejo de estados de cuenta para garantizar una experiencia fluida.

### Gestión de Códigos Expirados
1. **Validaciones de Caducidad:**
   - Validar cuando un código ya no sea válido.
   - Reinsertar automáticamente el correo electrónico en la cola para generar un nuevo código.
2. **Reintentos Automatizados:**
   - Permitir al usuario solicitar un nuevo código en caso de error.

### Página de Inicio Creativa
- Mostrar un mensaje amigable con el tiempo transcurrido desde la activación
- Actualización dinámica del tiempo utilizando Next.js y React.

### Validaciones Adicionales
- Implementar validaciones para garantizar:
  - Formatos correctos de correo electrónico.
  - Evitar múltiples solicitudes en un corto periodo de tiempo.
  - Una interfaz intuitiva y accesible.

## Consideraciones Técnicas

### Terraform
- Configuración de la infraestructura en Azure para automatizar:
  - Creación de bases de datos en Azure SQL.
  - Configuración de Azure Queue Storage.
  - Implementación de Function Apps y otros recursos necesarios.


## Nuevas Funcionalidades

### Implementación de GraphQL 

1. **Modelo de Datos:**
   - Se diseñó e implementó un modelo de datos utilizando la base de datos configurada en Azure. 

2. **Desarrollo del Servicio GraphQL:**
   - Se levantó un proyecto de GraphQL utilizando Node.js, Express y Apollo Server.
   - **Schema y Consultas:** 
     - Se definieron los tipos de datos y consultas necesarias para interactuar con el modelo de datos. Incluyendo filtros, y agregaciónes.
   - **Resolvers:**
     - Los resolvers fueron modularizados en archivos separados para facilitar el mantenimiento y escalabilidad del proyecto.

3. **Dockerización y Despliegue:**
   - El servicio fue desplegado en una nueva Web App en Azure, garantizando disponibilidad y escalabilidad.

4. **Integración con Next.js:**
   - Al iniciar sesión, los usuarios acceden a la página principal, donde pueden visualizar los datos obtenidos mediante consultas GraphQL.

---

### Codigo Fuente
Para explorar el código de este proyecto puedes acceder a los siguientes repositorios:
- **Initium UI:** [Repositorio del frontend](https://github.com/FranciscoBaltodano/initium-ui)
- **Initium API:** [Repositorio del backend](https://github.com/FranciscoBaltodano/initium-api)
- **Initium DB:** [Repositorio de la base de datos](https://github.com/FranciscoBaltodano/initium-object-db)
- **Initium Azure Function:** [Respositorio de la azure function app](https://github.com/FranciscoBaltodano/initium-function-app)
- **GraphQL API:** [Respositorio del backend con GraphQL](https://github.com/FranciscoBaltodano/apollo-api)
