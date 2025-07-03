// Insertar 3 sedes si la colección ya está creada
db.sedes.insertMany([
{ nombre: "Sede Norte", ciudad: "Bogotá" },
{ nombre: "Sede Sur", ciudad: "Medellín" },
{ nombre: "Sede Central", ciudad: "Cali" }
]);


// Insertar usuarios (empleados y clientes)
db.usuarios.insertMany([
  // Empleados
{
    nombre: "Ana Rodríguez",
    rol: "empleado",
    correo: "ana.rodriguez@parking.com",
    sede_id: ObjectId("6864924abd6b61d3ee08675a")
},
{
    nombre: "Carlos Gómez",
    rol: "empleado",
    correo: "carlos.gomez@parking.com",
    sede_id: ObjectId("6864924abd6b61d3ee086758")
},
{
    nombre: "Valentina Mora",
    rol: "empleado",
    correo: "valentina.mora@parking.com",
    sede_id: ObjectId("6864924abd6b61d3ee086759")
},
{
    nombre: "Luis Martínez",
    rol: "empleado",
    correo: "luis.martinez@parking.com",
    sede_id: ObjectId("6864924abd6b61d3ee086758")
},
{
    nombre: "Camila Torres",
    rol: "empleado",
    correo: "camila.torres@parking.com",
    sede_id: ObjectId("6864924abd6b61d3ee086758")
},
{
    nombre: "Santiago Ruiz",
    rol: "empleado",
    correo: "santiago.ruiz@parking.com",
    sede_id: ObjectId("6864924abd6b61d3ee086759")
},
{
    nombre: "Laura Ríos",
    rol: "empleado",
    correo: "laura.rios@parking.com",
    sede_id: ObjectId("6864924abd6b61d3ee08675a")
},
{
    nombre: "Andrés Salazar",
    rol: "empleado",
    correo: "andres.salazar@parking.com",
    sede_id: ObjectId("6864924abd6b61d3ee086759")
},
{
    nombre: "Manuela López",
    rol: "empleado",
    correo: "manuela.lopez@parking.com",
    sede_id: ObjectId("6864924abd6b61d3ee08675a")
},
{
    nombre: "Julián Mejía",
    rol: "empleado",
    correo: "julian.mejia@parking.com",
    sede_id: ObjectId("6864924abd6b61d3ee086759")
},

  // Clientes
{
    nombre: "María García",
    rol: "cliente",
    correo: "maria.garcia@mail.com"
},
{
    nombre: "José Pérez",
    rol: "cliente",
    correo: "jose.perez@mail.com"
},
{
    nombre: "Luisa Fernández",
    rol: "cliente",
    correo: "luisa.fernandez@mail.com"
},
{
    nombre: "Esteban Sánchez",
    rol: "cliente",
    correo: "esteban.sanchez@mail.com"
},
{
    nombre: "Daniela Castro",
    rol: "cliente",
    correo: "daniela.castro@mail.com"
},
{
    nombre: "Felipe Ramírez",
    rol: "cliente",
    correo: "felipe.ramirez@mail.com"
},
{
    nombre: "Carolina Romero",
    rol: "cliente",
    correo: "carolina.romero@mail.com"
},
{
    nombre: "Andrés Vargas",
    rol: "cliente",
    correo: "andres.vargas@mail.com"
},
{
    nombre: "Isabella Moreno",
    rol: "cliente",
    correo: "isabella.moreno@mail.com"
},
{
    nombre: "David Torres",
    rol: "cliente",
    correo: "david.torres@mail.com"
},
{
    nombre: "Juliana Reyes",
    rol: "cliente",
    correo: "juliana.reyes@mail.com"
},
{
    nombre: "Sebastián Cárdenas",
    rol: "cliente",
    correo: "sebastian.cardenas@mail.com"
},
{
    nombre: "Gabriela Lozano",
    rol: "cliente",
    correo: "gabriela.lozano@mail.com"
},
{
    nombre: "Juan Esteban Nieto",
    rol: "cliente",
    correo: "juan.nieto@mail.com"
},
{
    nombre: "Daniel Rincón",
    rol: "cliente",
    correo: "daniel.rincon@mail.com"
},
{
    nombre: "Carlos Mendoza",
    rol: "cliente",
    correo: "carlos.mendoza@mail.com"
},
{
    nombre: "Laura García",
    rol: "cliente",
    correo: "laura.garcia@mail.com"
},
{
    nombre: "Pedro Ramírez",
    rol: "cliente",
    correo: "pedro.ramirez@mail.com"
},
{
    nombre: "Valentina Pérez",
    rol: "cliente",
    correo: "valentina.perez@mail.com"
},
{
    nombre: "Andrés Torres",
    rol: "cliente",
    correo: "andres.torres@mail.com"
},
{
    nombre: "Camila Herrera",
    rol: "cliente",
    correo: "camila.herrera@mail.com"
},
{
    nombre: "Julián López",
    rol: "cliente",
    correo: "julian.lopez@mail.com"
},
{
    nombre: "Natalia Rojas",
    rol: "cliente",
    correo: "natalia.rojas@mail.com"
},
{
    nombre: "Esteban Castro",
    rol: "cliente",
    correo: "esteban.castro@mail.com"
},
{
    nombre: "Isabella Morales",
    rol: "cliente",
    correo: "isabella.morales@mail.com"
},
{
    nombre: "Mateo Rodríguez",
    rol: "cliente",
    correo: "mateo.rodriguez@mail.com"
},
{
    nombre: "Sara Romero",
    rol: "cliente",
    correo: "sara.romero@mail.com"
},
{
    nombre: "Tomás Álvarez",
    rol: "cliente",
    correo: "tomas.alvarez@mail.com"
},
{
    nombre: "Manuela Díaz",
    rol: "cliente",
    correo: "manuela.diaz@mail.com"
},
{
    nombre: "Daniel Navarro",
    rol: "cliente",
    correo: "daniel.navarro@mail.com"
}
])

//30 vehiculos
db.vehiculos.insertMany([
{ placa: "AAA100", tipo: "carro", cliente_id: ObjectId("...") },
{ placa: "AAB101", tipo: "moto", cliente_id: ObjectId("...") },
{ placa: "AAC102", tipo: "bicicleta", cliente_id: ObjectId("...") },
{ placa: "AAD103", tipo: "camión", cliente_id: ObjectId("...") },
{ placa: "AAE104", tipo: "carro", cliente_id: ObjectId("...") },
{ placa: "AAF105", tipo: "moto", cliente_id: ObjectId("...") },
{ placa: "AAG106", tipo: "bicicleta", cliente_id: ObjectId("...") },
{ placa: "AAH107", tipo: "camión", cliente_id: ObjectId("...") },
{ placa: "AAI108", tipo: "carro", cliente_id: ObjectId("...") },
{ placa: "AAJ109", tipo: "moto", cliente_id: ObjectId("...") },
{ placa: "AAK110", tipo: "bicicleta", cliente_id: ObjectId("...") },
{ placa: "AAL111", tipo: "camión", cliente_id: ObjectId("...") },
{ placa: "AAM112", tipo: "carro", cliente_id: ObjectId("...") },
{ placa: "AAN113", tipo: "moto", cliente_id: ObjectId("...") },
{ placa: "AAO114", tipo: "bicicleta", cliente_id: ObjectId("...") },
{ placa: "AAP115", tipo: "camión", cliente_id: ObjectId("...") },
{ placa: "AAQ116", tipo: "carro", cliente_id: ObjectId("...") },
{ placa: "AAR117", tipo: "moto", cliente_id: ObjectId("...") },
{ placa: "AAS118", tipo: "bicicleta", cliente_id: ObjectId("...") },
{ placa: "AAT119", tipo: "camión", cliente_id: ObjectId("...") },
{ placa: "AAU120", tipo: "carro", cliente_id: ObjectId("...") },
{ placa: "AAV121", tipo: "moto", cliente_id: ObjectId("...") },
{ placa: "AAW122", tipo: "bicicleta", cliente_id: ObjectId("...") },
{ placa: "AAX123", tipo: "camión", cliente_id: ObjectId("...") },
{ placa: "AAY124", tipo: "carro", cliente_id: ObjectId("...") },
{ placa: "AAZ125", tipo: "moto", cliente_id: ObjectId("...") },
{ placa: "ABA126", tipo: "bicicleta", cliente_id: ObjectId("...") },
{ placa: "ABB127", tipo: "camión", cliente_id: ObjectId("...") },
{ placa: "ABC128", tipo: "carro", cliente_id: ObjectId("...") },
{ placa: "ABD129", tipo: "moto", cliente_id: ObjectId("...") }
])

//zonas
const sedes = db.sedes.find().toArray();

db.zonas.insertMany([
  // Zonas para Sede Norte
{
    nombre: "Zona Norte A",
    sede_id: sedes[0]._id,
    tipo_permitido: "carro",
    capacidad_maxima: 15,
    cupos_disponibles: 15,
    tarifa: 2500.0
},
{
    nombre: "Zona Norte B",
    sede_id: sedes[0]._id,
    tipo_permitido: "moto",
    capacidad_maxima: 12,
    cupos_disponibles: 12,
    tarifa: 1500.0
},
{
    nombre: "Zona Norte C",
    sede_id: sedes[0]._id,
    tipo_permitido: "bicicleta",
    capacidad_maxima: 20,
    cupos_disponibles: 20,
    tarifa: 800.0
},
{
    nombre: "Zona Norte D",
    sede_id: sedes[0]._id,
    tipo_permitido: "camión",
    capacidad_maxima: 8,
    cupos_disponibles: 8,
    tarifa: 5000.0
},
{
    nombre: "Zona Norte E",
    sede_id: sedes[0]._id,
    tipo_permitido: "carro",
    capacidad_maxima: 18,
    cupos_disponibles: 18,
    tarifa: 2800.0
},

  // Zonas para Sede Sur
{
    nombre: "Zona Sur A",
    sede_id: sedes[1]._id,
    tipo_permitido: "moto",
    capacidad_maxima: 14,
    cupos_disponibles: 14,
    tarifa: 1600.0
},
{
    nombre: "Zona Sur B",
    sede_id: sedes[1]._id,
    tipo_permitido: "carro",
    capacidad_maxima: 16,
    cupos_disponibles: 16,
    tarifa: 2600.0
},
{
    nombre: "Zona Sur C",
    sede_id: sedes[1]._id,
    tipo_permitido: "bicicleta",
    capacidad_maxima: 25,
    cupos_disponibles: 25,
    tarifa: 900.0
},
{
    nombre: "Zona Sur D",
    sede_id: sedes[1]._id,
    tipo_permitido: "camión",
    capacidad_maxima: 10,
    cupos_disponibles: 10,
    tarifa: 4800.0
},
{
    nombre: "Zona Sur E",
    sede_id: sedes[1]._id,
    tipo_permitido: "carro",
    capacidad_maxima: 20,
    cupos_disponibles: 20,
    tarifa: 2900.0
},

  // Zonas para Sede Central
{
    nombre: "Zona Central A",
    sede_id: sedes[2]._id,
    tipo_permitido: "bicicleta",
    capacidad_maxima: 22,
    cupos_disponibles: 22,
    tarifa: 850.0
},
{
    nombre: "Zona Central B",
    sede_id: sedes[2]._id,
    tipo_permitido: "moto",
    capacidad_maxima: 13,
    cupos_disponibles: 13,
    tarifa: 1550.0
},
{
    nombre: "Zona Central C",
    sede_id: sedes[2]._id,
    tipo_permitido: "carro",
    capacidad_maxima: 17,
    cupos_disponibles: 17,
    tarifa: 2700.0
},
{
    nombre: "Zona Central D",
    sede_id: sedes[2]._id,
    tipo_permitido: "camión",
    capacidad_maxima: 9,
    cupos_disponibles: 9,
    tarifa: 5100.0
},
{
    nombre: "Zona Central E",
    sede_id: sedes[2]._id,
    tipo_permitido: "carro",
    capacidad_maxima: 19,
    cupos_disponibles: 19,
    tarifa: 3000.0
}
])



