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

Este proyecto consiste en la elaboracion de una plataforma de delivery donde se busca implementar los modulos de clientes, administradores y motoristas, en donde los administradores tienen la capacidad de registrar, editar, administrar, y elminar insumos, asi como asignar pedidos a los motoristas que registren en la plateforma.

Dentro de la plataforma tambien se encuentran los clientes que deben logearse para poder realizar sus pedidos. Los clientes cuentan con un carrito de compras donde pueden configurar sus pedidos y el carrito automaticamente se encargara de calcular el subtotal de la compra, pues el total de la compra se calcula con las coordenadas de los clientes, y en base al recorrido del viaje se recargara al costo, cierta cifra para compensar el recorrido del viaje del motorista.

Por ultimo, tenemos el modulo del motorista que se encarga de tomar el pedido del cliente y notificar a la plataforma el estado del envio para deteerminar si la orden fue entregada con exito.

Para este proyecto se utilizo Spring Boot para el backend del sistema debido a su rendimiento y facilidad para la creacion de la Rest API
 
Para el lado del frontend se utilizo laravel con blade y bootstrap para ofrecerle al usuario una interfaz intuitiva y una experiencia de usuario agradable

Y como base de datos se utilizo MySQL permitiendo un facil pero solido desarrollo de la base de datos permitiendo integridad y seguridad en los datos.