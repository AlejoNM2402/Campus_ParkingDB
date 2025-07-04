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
    sede_id: ObjectId("6864924abd6b61d3ee08675a"),
    documento: "200000001"
},
{
    nombre: "Carlos Gómez",
    rol: "empleado",
    correo: "carlos.gomez@parking.com",
    sede_id: ObjectId("6864924abd6b61d3ee086758"),
    documento: "200000002"
},
{
    nombre: "Valentina Mora",
    rol: "empleado",
    correo: "valentina.mora@parking.com",
    sede_id: ObjectId("6864924abd6b61d3ee086759"),
    documento: "200000003"
},
{
    nombre: "Luis Martínez",
    rol: "empleado",
    correo: "luis.martinez@parking.com",
    sede_id: ObjectId("6864924abd6b61d3ee086758"),
    documento: "200000004"
},
{
    nombre: "Camila Torres",
    rol: "empleado",
    correo: "camila.torres@parking.com",
    sede_id: ObjectId("6864924abd6b61d3ee086758"),
    documento: "200000005"
},
{
    nombre: "Santiago Ruiz",
    rol: "empleado",
    correo: "santiago.ruiz@parking.com",
    sede_id: ObjectId("6864924abd6b61d3ee086759"),
    documento: "200000006"
},
{
    nombre: "Laura Ríos",
    rol: "empleado",
    correo: "laura.rios@parking.com",
    sede_id: ObjectId("6864924abd6b61d3ee08675a"),
    documento: "200000007"
},
{
    nombre: "Andrés Salazar",
    rol: "empleado",
    correo: "andres.salazar@parking.com",
    sede_id: ObjectId("6864924abd6b61d3ee086759"),
    documento: "200000008"
},
{
    nombre: "Manuela López",
    rol: "empleado",
    correo: "manuela.lopez@parking.com",
    sede_id: ObjectId("6864924abd6b61d3ee08675a"),
    documento: "200000009"
},
{
    nombre: "Julián Mejía",
    rol: "empleado",
    correo: "julian.mejia@parking.com",
    sede_id: ObjectId("6864924abd6b61d3ee086759"),
    documento: "200000010"
},

  // Clientes

{
    nombre: "María García",
    rol: "cliente",
    correo: "maria.garcia@mail.com",
    documento: "100000001"
},
{
    nombre: "José Pérez",
    rol: "cliente",
    correo: "jose.perez@mail.com",
    documento: "100000002"
},
{
    nombre: "Luisa Fernández",
    rol: "cliente",
    correo: "luisa.fernandez@mail.com",
    documento: "100000003"
},
{
    nombre: "Esteban Sánchez",
    rol: "cliente",
    correo: "esteban.sanchez@mail.com",
    documento: "100000004"
},
{
    nombre: "Daniela Castro",
    rol: "cliente",
    correo: "daniela.castro@mail.com",
    documento: "100000005"
},
{
    nombre: "Felipe Ramírez",
    rol: "cliente",
    correo: "felipe.ramirez@mail.com",
    documento: "100000006"
},
{
    nombre: "Carolina Romero",
    rol: "cliente",
    correo: "carolina.romero@mail.com",
    documento: "100000007"
},
{
    nombre: "Andrés Vargas",
    rol: "cliente",
    correo: "andres.vargas@mail.com",
    documento: "100000008"
},
{
    nombre: "Isabella Moreno",
    rol: "cliente",
    correo: "isabella.moreno@mail.com",
    documento: "100000009"
},
{
    nombre: "David Torres",
    rol: "cliente",
    correo: "david.torres@mail.com",
    documento: "100000010"
},
{
    nombre: "Juliana Reyes",
    rol: "cliente",
    correo: "juliana.reyes@mail.com",
    documento: "100000011"
},
{
    nombre: "Sebastián Cárdenas",
    rol: "cliente",
    correo: "sebastian.cardenas@mail.com",
    documento: "100000012"
},
{
    nombre: "Gabriela Lozano",
    rol: "cliente",
    correo: "gabriela.lozano@mail.com",
    documento: "100000013"
},
{
    nombre: "Juan Esteban Nieto",
    rol: "cliente",
    correo: "juan.nieto@mail.com",
    documento: "100000014"
},
{
    nombre: "Daniel Rincón",
    rol: "cliente",
    correo: "daniel.rincon@mail.com",
    documento: "100000015"
},
{
    nombre: "Carlos Mendoza",
    rol: "cliente",
    correo: "carlos.mendoza@mail.com",
    documento: "100000016"
},
{
    nombre: "Laura García",
    rol: "cliente",
    correo: "laura.garcia@mail.com",
    documento: "100000017"
},
{
    nombre: "Pedro Ramírez",
    rol: "cliente",
    correo: "pedro.ramirez@mail.com",
    documento: "100000018"
},
{
    nombre: "Valentina Pérez",
    rol: "cliente",
    correo: "valentina.perez@mail.com",
    documento: "100000019"
},
{
    nombre: "Andrés Torres",
    rol: "cliente",
    correo: "andres.torres@mail.com",
    documento: "100000020"
},
{
    nombre: "Camila Herrera",
    rol: "cliente",
    correo: "camila.herrera@mail.com",
    documento: "100000021"
},
{
    nombre: "Julián López",
    rol: "cliente",
    correo: "julian.lopez@mail.com",
    documento: "100000022"
},
{
    nombre: "Natalia Rojas",
    rol: "cliente",
    correo: "natalia.rojas@mail.com",
    documento: "100000023"
},
{
    nombre: "Esteban Castro",
    rol: "cliente",
    correo: "esteban.castro@mail.com",
    documento: "100000024"
},
{
    nombre: "Isabella Morales",
    rol: "cliente",
    correo: "isabella.morales@mail.com",
    documento: "100000025"
},
{
    nombre: "Mateo Rodríguez",
    rol: "cliente",
    correo: "mateo.rodriguez@mail.com",
    documento: "100000026"
},
{
    nombre: "Sara Romero",
    rol: "cliente",
    correo: "sara.romero@mail.com",
    documento: "100000027"
},
{
    nombre: "Tomás Álvarez",
    rol: "cliente",
    correo: "tomas.alvarez@mail.com",
    documento: "100000028"
},
{
    nombre: "Manuela Díaz",
    rol: "cliente",
    correo: "manuela.diaz@mail.com",
    documento: "100000029"
},
{
    nombre: "Daniel Navarro",
    rol: "cliente",
    correo: "daniel.navarro@mail.com",
    documento: "100000030"
},
{
    nombre: "Claudia Ramírez",
    rol: "admin",
    correo: "claudia.ramirez@parking.com",
    documento: "300000001"
},
{
    nombre: "Fernando Castillo",
    rol: "admin",
    correo: "fernando.castillo@parking.com",
    documento: "300000002"
},
{
    nombre: "Marcela Vélez",
    rol: "admin",
    correo: "marcela.velez@parking.com",
    documento: "300000003"
}
])




//30 vehiculos
db.vehiculos.insertMany([
{ placa: "AAA100", tipo: "carro", cliente_id: ObjectId("686710062ce788c337c01c8d") },
{ placa: "AAB101", tipo: "moto", cliente_id: ObjectId("686710062ce788c337c01c8e") },
{ placa: "AAC102", tipo: "bicicleta", cliente_id: ObjectId("686710062ce788c337c01c8f") },
{ placa: "AAD103", tipo: "camión", cliente_id: ObjectId("686710062ce788c337c01c90") },
{ placa: "AAE104", tipo: "carro", cliente_id: ObjectId("686710062ce788c337c01c91") },
{ placa: "AAF105", tipo: "moto", cliente_id: ObjectId("686710062ce788c337c01c92") },
{ placa: "AAG106", tipo: "bicicleta", cliente_id: ObjectId("686710062ce788c337c01c93") },
{ placa: "AAH107", tipo: "camión", cliente_id: ObjectId("686710062ce788c337c01c94") },
{ placa: "AAI108", tipo: "carro", cliente_id: ObjectId("686710062ce788c337c01c95") },
{ placa: "AAJ109", tipo: "moto", cliente_id: ObjectId("686710062ce788c337c01c96") },
{ placa: "AAK110", tipo: "bicicleta", cliente_id: ObjectId("686710062ce788c337c01c97") },
{ placa: "AAL111", tipo: "camión", cliente_id: ObjectId("686710062ce788c337c01c98") },
{ placa: "AAM112", tipo: "carro", cliente_id: ObjectId("686710062ce788c337c01c99") },
{ placa: "AAN113", tipo: "moto", cliente_id: ObjectId("686710062ce788c337c01c9a") },
{ placa: "AAO114", tipo: "bicicleta", cliente_id: ObjectId("686710062ce788c337c01c9b") },
{ placa: "AAP115", tipo: "camión", cliente_id: ObjectId("686710062ce788c337c01c9c") },
{ placa: "AAQ116", tipo: "carro", cliente_id: ObjectId("686710062ce788c337c01c9d") },
{ placa: "AAR117", tipo: "moto", cliente_id: ObjectId("686710062ce788c337c01c9e") },
{ placa: "AAS118", tipo: "bicicleta", cliente_id: ObjectId("686710062ce788c337c01c9f") },
{ placa: "AAT119", tipo: "camión", cliente_id: ObjectId("686710062ce788c337c01ca0") },
{ placa: "AAU120", tipo: "carro", cliente_id: ObjectId("686710062ce788c337c01ca1") },
{ placa: "AAV121", tipo: "moto", cliente_id: ObjectId("686710062ce788c337c01ca2") },
{ placa: "AAW122", tipo: "bicicleta", cliente_id: ObjectId("686710062ce788c337c01ca3") },
{ placa: "AAX123", tipo: "camión", cliente_id: ObjectId("686710062ce788c337c01ca4") },
{ placa: "AAY124", tipo: "carro", cliente_id: ObjectId("686710062ce788c337c01ca5") },
{ placa: "AAZ125", tipo: "moto", cliente_id: ObjectId("686710062ce788c337c01ca6") },
{ placa: "ABA126", tipo: "bicicleta", cliente_id: ObjectId("686710062ce788c337c01ca7") },
{ placa: "ABB127", tipo: "camión", cliente_id: ObjectId("686710062ce788c337c01ca8") },
{ placa: "ABC128", tipo: "carro", cliente_id: ObjectId("686710062ce788c337c01ca9") },
{ placa: "ABD129", tipo: "moto", cliente_id: ObjectId("686710062ce788c337c01caa") }
])


//zonas
db.zonas.insertMany([
  // Zonas para Sede Norte
{
    nombre: "Zona Norte A",
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    tipo_permitido: "carro",
    capacidad_maxima: 20,
    cupos_disponibles: 12,
    tarifa_por_hora: 2500.0
},
{
    nombre: "Zona Norte B",
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    tipo_permitido: "moto",
    capacidad_maxima: 12,
    cupos_disponibles: 12,
    tarifa_por_hora: 1500.0
},
{
    nombre: "Zona Norte C",
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    tipo_permitido: "bicicleta",
    capacidad_maxima: 30,
    cupos_disponibles: 22,
    tarifa_por_hora: 800.0
},
{
    nombre: "Zona Norte D",
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    tipo_permitido: "camión",
    capacidad_maxima: 10,
    cupos_disponibles: 5,
    tarifa_por_hora: 5000.0
},
{
    nombre: "Zona Norte E",
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    tipo_permitido: "carro",
    capacidad_maxima: 22,
    cupos_disponibles: 12,
    tarifa_por_hora: 2800.0
},

  // Zonas para Sede Sur
{
    nombre: "Zona Sur A",
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    tipo_permitido: "moto",
    capacidad_maxima: 14,
    cupos_disponibles: 12,
    tarifa_por_hora: 1600.0
},
{
    nombre: "Zona Sur B",
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    tipo_permitido: "carro",
    capacidad_maxima: 16,
    cupos_disponibles: 13,
    tarifa_por_hora: 2600.0
},
{
    nombre: "Zona Sur C",
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    tipo_permitido: "bicicleta",
    capacidad_maxima: 25,
    cupos_disponibles: 20,
    tarifa_por_hora: 900.0
},
{
    nombre: "Zona Sur D",
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    tipo_permitido: "camión",
    capacidad_maxima: 10,
    cupos_disponibles: 10,
    tarifa_por_hora: 4800.0
},
{
    nombre: "Zona Sur E",
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    tipo_permitido: "carro",
    capacidad_maxima: 20,
    cupos_disponibles: 15,
    tarifa_por_hora: 2900.0
},

  // Zonas para Sede Central
{
    nombre: "Zona Central A",
    sede_id: ObjectId("68670f052ce788c337c01c82"),
    tipo_permitido: "bicicleta",
    capacidad_maxima: 22,
    cupos_disponibles: 22,
    tarifa_por_hora: 850.0
},
{
    nombre: "Zona Central B",
    sede_id: ObjectId("68670f052ce788c337c01c82"),
    tipo_permitido: "moto",
    capacidad_maxima: 18,
    cupos_disponibles: 9,
    tarifa_por_hora: 1550.0
},
{
    nombre: "Zona Central C",
    sede_id: ObjectId("68670f052ce788c337c01c82"),
    tipo_permitido: "carro",
    capacidad_maxima: 20,
    cupos_disponibles: 10,
    tarifa_por_hora: 2700.0
},
{
    nombre: "Zona Central D",
    sede_id: ObjectId("68670f052ce788c337c01c82"),
    tipo_permitido: "camión",
    capacidad_maxima: 8,
    cupos_disponibles: 3,
    tarifa_por_hora: 5100.0
},
{
    nombre: "Zona Central E",
    sede_id: ObjectId("68670f052ce788c337c01c82"),
    tipo_permitido: "carro",
    capacidad_maxima: 20,
    cupos_disponibles: 11,
    tarifa_por_hora: 3000.0
}
])




