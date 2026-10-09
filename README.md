# Prueba Técnica: Aplicación de Gestión de Colaboradores

Este repositorio contiene la solución a la Prueba Técnica para el desarrollo de un CRUD completo, separando la lógica de negocio y una interfaz de usuario.

**Autor:** Saúl Menchú

---

## Enlace al Repositorio Git
* **Repositorio Público:** [https://github.com/SaulMen/prueba-tecnica](https://github.com/SaulMen/prueba-tecnica) 

---

## 1. Configuración de la Base de Datos

Antes de ejecutar los proyectos, se debe ejecutar el siguiente script SQL para crear la base de datos y la tabla correspondiente.

```sql
-- 1. creación de la base de datos
CREATE DATABASE test;

-- 2. creación de la tabla 'colaborador':
CREATE TABLE colaborador (
    idcolaborador SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    direccion VARCHAR(150) NOT NULL,
    edad INT NOT NULL,
    profesion VARCHAR(50) NOT NULL,
    estado_civil VARCHAR(50) NOT NULL
);

-- 3. Datos de prueba:
INSERT INTO colaborador (nombre, apellido, direccion, edad, profesion, estado_civil) VALUES
('Juan', 'Prueba', 'Guatemala', 19, 'Estudiante', 'Soltero'),
('Pedro', 'Prueba2', 'Amatitlán', 29, 'Ingeniero', 'Soltero'),
('Carlos', 'Prueba3', 'Zona 1', 46, 'Arquitecto', 'Casado');

```
---
## 2. Ejecutar el backend

Pasos para ejecutar el backend:

```cmd
# Entrar en la carpeta del backend
cd nom-ws-datosempleado-be

# Instalar las dependencias
npm install

# Configurar las credenciales en el archivo de ambiente .env

DATABASE_URL="postgresql://user:password@host:port/database?schema=public"

# Generar el cliente de Prisma
npx prisma generate

# Iniciar el servidor
node src/server.js
```
---
## 3. Ejecutar el frontend

Pasos para ejecutar el frontend
```cmd
# Entrar en la carpeta del frontend
cd nom-ws-datosempleado-be

# Instalar dependencias
npm install

# Iniciar el servidor
ng serve -o
```
---
## Enlace del video
* **Video:** [https://drive.google.com/file/d/1UnCuNUIJ4PJUCWezMcc3-cJzFQTSTWsS/view?usp=sharing](https://drive.google.com/file/d/1UnCuNUIJ4PJUCWezMcc3-cJzFQTSTWsS/view?usp=sharing) 

## Tecnologías utilizadas

Para esta aplicación se utilizaron las siguientes tecnologías:
- Backend: Node.js con Express.js
- ORM: Prisma
- Frontend: Angular
- Diseño: Angular material
- Base de datos: PostgreSQL