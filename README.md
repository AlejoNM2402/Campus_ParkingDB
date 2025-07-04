# Campus Parking - Sistema de Gestión de Parqueadero

## Descripción

Campus Parking es un sistema backend para la gestión de parqueaderos, construido con MongoDB. Permite registrar ingresos y salidas de vehículos, gestionar cupos disponibles por zonas y sedes, y garantizar la integridad de datos mediante transacciones atómicas.

---

## Tecnologías usadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **MongoDB**: Base de datos NoSQL para almacenamiento flexible de datos.
- **MongoDB Driver para Node.js**: Conexión y operaciones con MongoDB.
- **VSCode**: Editor de código recomendado.

---

## Funcionalidades principales

- Registrar ingresos de vehículos en zonas específicas.
- Actualizar automáticamente la disponibilidad de cupos en cada zona.
- Uso de transacciones para asegurar que las operaciones de inserción y actualización se realicen correctamente y evitar inconsistencias.
- Validación de disponibilidad de cupos antes de registrar un ingreso.
- Manejo de errores con rollback en caso de fallos.

---

## Estructura de la base de datos

### Colecciones principales

- **parqueos**: Registro de cada ingreso y salida de vehículos.
  - Campos importantes: 
    - `vehiculo_id` (ObjectId)
    - `cliente_id` (ObjectId)
    - `zona_id` (ObjectId)
    - `sede_id` (ObjectId)
    - `hora_entrada` (Date)
    - `hora_salida` (Date)
    - `tiempo_total` (Número de horas)
    - `costo_total` (Número, moneda local)

- **zonas**: Información de las zonas dentro de las sedes y su disponibilidad.
  - Campos importantes:
    - `_id` (ObjectId)
    - `cupos_disponibles` (Número)

- **sedes** (opcional, según cómo lo uses): Sedes del sistema de parqueadero.

---

## Cómo ejecutar el sistema

1. Clona el repositorio o copia los archivos en tu máquina local.
2. Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
3. Abre la terminal en la carpeta del proyecto.
4. Ejecuta `npm install` para instalar dependencias (MongoDB driver).
5. Configura la URI de conexión a tu base de datos MongoDB en el archivo principal (ej. `registroIngreso.js`):


```js
const uri = "mongodb+srv://alejonaranjo:alejo2402@alejandro.zn6aqic.mongodb.net/";
