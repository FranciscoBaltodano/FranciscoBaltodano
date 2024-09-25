---
title: Sistema Universitario
dates: Junio 2024 - Agosto 2024,
technologies: [
      "React",
      "Express",
      "Material UI",
      "Tailwind CSS",
      "CommetChat",
      "Node",
      "Supabase",
    ]
logo: /logos/sistemaUniversitario.webp
img: /liveDemo/sistemaUniversitario.jpeg
description: Sistema para la gestion de docentes, estudiantes, matricula y admisiones que incluye sistema de mensajeria en tiempo real. Este sistema tambien cubre la gestion de solicitudes academicas, cambios de clave, creacion de empleados, e impartición de actividades.
url:
    gitHub: https://github.com/FranciscoBaltodano/Proyecto_Ingenieria_Del_Software_Frontend
    liveDemo: 
---



Este sistema tiene múltiples módulos que gestionan desde el proceso de admisión hasta la matriculación y la administración de calificaciones. A continuación, se describen los módulos y sus funcionalidades.

## Módulos

### 1. Admisiones
Este módulo permite gestionar el proceso de admisión de estudiantes mediante la inscripción y clasificación de acuerdo a las carreras seleccionadas y los exámenes realizados.

#### Funcionalidades:
1. **Inscripción de Estudiantes:**
   - Nombre
   - Apellidos
   - Carrera principal
   - Carrera secundaria
   - Identidad
   - Foto de certificado de secundaria
   - Teléfono
   - Correo personal
   - Centro regional

2. **Clasificación de estudiantes:** El sistema clasifica a los estudiantes según la carrera y exámenes requeridos.

3. **Ingreso de Notas:** Se pueden ingresar notas de exámenes automáticamente mediante un archivo CSV que incluye:
   - Identidad del estudiante
   - Tipo de examen
   - Nota

4. **Determinación de Resultado:** El sistema determina si el estudiante:
   - Aprobó para ambas carreras
   - Aprobó solo para la carrera principal
   - Aprobó solo para la carrera secundaria
   - No aprobó para ninguna carrera

5. **Notificación de Resultados:** Se envía un correo electrónico a cada estudiante con los resultados de los exámenes.

6. **Generación de CSV:** Se genera un archivo CSV con los estudiantes admitidos para ser utilizado por el sistema de registro.

### 2. Estudiantes
Este módulo permite gestionar la información y las acciones disponibles para los estudiantes.

#### Funcionalidades:
1. **Creación de Usuarios Automática:** A partir del archivo CSV proporcionado por el módulo de Admisiones, se crean automáticamente usuarios con:
   - Nombre completo
   - Identidad
   - Carrera
   - Dirección
   - Correo personal
   - Centro al que pertenece

   Además, se envía un correo al estudiante con su número de cuenta y clave.

2. **Recuperación de Clave:** El sistema permite que los estudiantes recuperen su clave.

3. **Matrícula:** Los estudiantes pueden matricularse en clases que les falten por aprobar y para las cuales cumplan los requisitos.

4. **Descarga de Certificado Académico:** Los estudiantes pueden descargar su certificado académico en formato PDF.

5. **Perfil del Estudiante:** Cada estudiante tiene un perfil donde puede:
   - Subir hasta 3 fotos
   - Colocar una descripción personal
   - Mostrar información general (carrera, índice, número de cuenta)

6. **Chat:** El sistema proporciona un chat que permite a los estudiantes:
   - Comunicarse con otros estudiantes que tengan en sus contactos.
   - Solicitar ser contacto de otro estudiante ingresando su número de cuenta.
   - Aceptar o declinar solicitudes de contacto.

7. **Revisión de Notas:** Los estudiantes pueden revisar sus calificaciones después de evaluar a sus docentes.

8. **Solicitudes Especiales:** Los estudiantes pueden realizar las siguientes solicitudes:
   - Cambio de carrera
   - Cancelaciones excepcionales
   - Cambio de centro
   - Pago de reposición

### 3. Proceso de Matrícula
Este módulo permite gestionar el proceso de matrícula para los estudiantes de acuerdo a su índice académico y las ofertas de clases.

#### Funcionalidades:
1. **Activación del Proceso de Matrícula:** El administrador activa el proceso de matrícula y se genera un calendario basado en las fechas programadas.

2. **Secciones Disponibles:** Las secciones disponibles son programadas previamente por los jefes de departamento.

3. **Ajustes durante la Matrícula:** Los jefes de departamento pueden aumentar cupos y crear nuevas secciones.

4. **Matrícula por Índice:** Los estudiantes se matriculan de acuerdo a su índice académico.

5. **Perfil del Docente:** Los estudiantes pueden acceder al perfil del docente de cada clase matriculada.

6. **Cancelación de Secciones:** Los estudiantes pueden cancelar secciones libremente durante el proceso de matrícula.

### 4. Proceso de Ingreso de Notas
Este módulo permite que los docentes ingresen las calificaciones de los estudiantes en el sistema.

#### Funcionalidades:
1. **Activación del Proceso:** El administrador activa el proceso de ingreso de notas.

2. **Ingreso de Notas:** Los docentes ingresan las notas de sus clases e indican si el estudiante:
   - Aprobó
   - Reprobó
   - Abandonó
   - No se presentó

3. **Finalización del Ingreso de Notas:** Una vez completado, se envía un correo a los estudiantes para que revisen sus calificaciones.

4. **Evaluación de Docentes:** Los estudiantes deben evaluar a sus docentes antes de ver sus notas.

### 5. Docentes
Este módulo permite gestionar la información y las acciones disponibles para los docentes.

#### Funcionalidades:
1. **Creación de Usuarios:** El administrador crea los usuarios de los docentes con:
   - Nombre
   - Número de empleado
   - Foto
   - Centro al que pertenece

2. **Acceso a Clases Asignadas:** Los docentes pueden:
   - Descargar la lista de estudiantes matriculados en cada sección.
   - Subir un vídeo por cada clase asignada.

### 6. Jefes de Departamento
Los jefes de departamento son responsables de la planificación académica y la gestión de secciones.

#### Funcionalidades:
1. **Planificación Académica:** Los jefes pueden crear secciones, asignar docentes, aulas y horarios sin traslapes.

2. **Ajustes de Cupos:** Pueden aumentar cupos y cancelar secciones con justificación.

3. **Acceso a Evaluaciones y Estadísticas:** Pueden revisar las evaluaciones de docentes, historial de estudiantes y notas ingresadas.

4. **Administración de Claves:** Pueden reiniciar la clave de los docentes de su departamento.

### 7. Coordinadores
Los coordinadores gestionan la carga académica y las solicitudes de los estudiantes.

#### Funcionalidades:
1. **Gestión de Secciones:** Pueden ver y descargar la carga académica de cada período en hoja de cálculo o PDF.

2. **Historial de Estudiantes:** Tienen acceso al historial académico de los estudiantes.

3. **Aprobación de Solicitudes:** Aprueban o desaprueban solicitudes de cambio de carrera, cancelaciones excepcionales y cambio de centro.

### 8. Administrador
El administrador gestiona la creación de usuarios y la configuración de procesos.

#### Funcionalidades:
1. **Creación de Usuarios:** El administrador crea usuarios para los docentes.

2. **Configuración de Procesos:** El administrador configura los siguientes procesos:
   - Planificación académica
   - Matrícula
   - Cancelaciones excepcionales

