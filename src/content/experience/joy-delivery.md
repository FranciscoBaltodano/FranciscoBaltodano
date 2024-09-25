---
title: Joy Delivery
dates: Julio 2023 — Agosto 2023,
technologies: [
      "Laravel",
      "Spring Boot",
      "Swagger",
      "Bootstrap",
    ]
logo: /logos/joy.jpg
img: /liveDemo/joy.png
description: Sistema de delivery que incluye gestion de motoristas, creación de productos, carrito de compras, costo de envios basado en coordenadas geograficas, y sistema de pagos.
url:
    gitHub: https://github.com/FranciscoBaltodano/JOYdeliveyFrontend
    liveDemo: 
---


Este proyecto tiene como objetivo el desarrollo de una plataforma de **delivery** eficiente y escalable, que integra funcionalidades para **clientes**, **administradores** y **motoristas**, optimizando el proceso de pedidos y entregas.

## Funcionalidades Principales

### Módulo de Administradores
Los administradores tienen un rol crucial en la plataforma, con capacidades para:
- **Gestionar insumos**: Registrar, editar, administrar y eliminar productos o artículos.
- **Asignar pedidos**: Asignar pedidos a los motoristas registrados.
- **Monitoreo y control**: Seguir el estado de los pedidos y gestionar el desempeño de los motoristas.

### Módulo de Clientes
El módulo de clientes permite a los usuarios:
- **Registro y autenticación**: Los clientes deben registrarse e iniciar sesión para realizar pedidos.
- **Carrito de compras**: El cliente puede configurar su pedido a través de un carrito de compras. 
  - El carrito **calcula automáticamente** el subtotal de la compra.
  - El **total** se ajusta según la distancia calculada entre las coordenadas del cliente y el destino del pedido, añadiendo un costo adicional por el recorrido del motorista.

### Módulo de Motoristas
Los motoristas son responsables de gestionar las entregas de los pedidos realizados por los clientes. Este módulo incluye:
- **Notificación del estado de envío**: El motorista actualiza el estado de la entrega en tiempo real.
- **Confirmación de entregas**: El sistema registra si el pedido ha sido entregado exitosamente.

## Tecnologías Utilizadas

### Backend
El backend fue desarrollado utilizando **Spring Boot** para aprovechar:
- **Alto rendimiento**: Spring Boot proporciona un marco robusto para la creación de APIs REST.
- **Facilidad de desarrollo**: Simplifica la construcción de microservicios y el manejo de dependencias.

### Frontend
El frontend fue implementado con **Laravel** utilizando **Blade** como motor de plantillas y **Bootstrap** para estilizar la interfaz de usuario, ofreciendo:
- **Interfaz intuitiva**: Una experiencia de usuario agradable y fácil de usar.
- **Diseño responsive**: Garantiza que la plataforma sea accesible desde cualquier dispositivo.

### Base de Datos
El sistema utiliza **MySQL** como base de datos, lo que permite:
- **Integridad de los datos**: Gestión segura y consistente de la información.
- **Rendimiento sólido**: Eficiente manejo de grandes volúmenes de datos.
