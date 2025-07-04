// Insertar 3 sedes si la colección ya está creada
db.sedes.insertMany([
{ nombre: "Sede Norte", ciudad: "Bogotá" },
{ nombre: "Sede Sur", ciudad: "Medellín" },
{ nombre: "Sede Central", ciudad: "Cali" }
]);


// Insertar usuarios
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
// Admins
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


//parqueos
db.parqueos.insertMany([
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cae"),
    cliente_id: ObjectId("686710062ce788c337c01c8d"),
    zona_id: ObjectId("686719f9c512adf7b99d6e06"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-01T08:00:00Z"),
    hora_salida:ISODate("2025-07-01T13:00:00Z"),
    tiempo_total: 5,
    costo_total: 12500
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01caf"),
    cliente_id: ObjectId("686710062ce788c337c01c8e"),
    zona_id: ObjectId("686719f9c512adf7b99d6e07"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-01T09:30:00Z"),
    hora_salida:ISODate("2025-07-01T11:30:00Z"),
    tiempo_total: 2,
    costo_total: 3000
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cb0"),
    cliente_id: ObjectId("686710062ce788c337c01c8f"),
    zona_id: ObjectId("686719f9c512adf7b99d6e08"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-02T07:15:00Z"),
    hora_salida:ISODate("2025-07-02T12:15:00Z"),
    tiempo_total: 5,
    costo_total: 4000
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cb1"),
    cliente_id: ObjectId("686710062ce788c337c01c90"),
    zona_id: ObjectId("686719f9c512adf7b99d6e09"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-02T10:00:00Z"),
    hora_salida:ISODate("2025-07-02T15:00:00Z"),
    tiempo_total: 5,
    costo_total: 25000
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cb2"),
    cliente_id: ObjectId("686710062ce788c337c01c91"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0a"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-03T08:45:00Z"),
    hora_salida:ISODate("2025-07-03T10:45:00Z"),
    tiempo_total: 2,
    costo_total: 5600
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cb3"),
    cliente_id: ObjectId("686710062ce788c337c01c92"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0b"),
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    hora_entrada:ISODate("2025-07-01T07:00:00Z"),
    hora_salida:ISODate("2025-07-01T10:00:00Z"),
    tiempo_total: 3,
    costo_total: 4800
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cb4"),
    cliente_id: ObjectId("686710062ce788c337c01c93"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0c"),
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    hora_entrada:ISODate("2025-07-02T11:15:00Z"),
    hora_salida:ISODate("2025-07-02T14:15:00Z"),
    tiempo_total: 3,
    costo_total: 7800
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cb5"),
    cliente_id: ObjectId("686710062ce788c337c01c94"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0d"),
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    hora_entrada:ISODate("2025-07-03T09:00:00Z"),
    hora_salida:ISODate("2025-07-03T13:00:00Z"),
    tiempo_total: 4,
    costo_total: 19200
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cb6"),
    cliente_id: ObjectId("686710062ce788c337c01c95"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0e"),
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    hora_entrada:ISODate("2025-07-01T08:30:00Z"),
    hora_salida:ISODate("2025-07-01T11:30:00Z"),
    tiempo_total: 3,
    costo_total: 2700
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cb7"),
    cliente_id: ObjectId("686710062ce788c337c01c96"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0f"),
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    hora_entrada:ISODate("2025-07-02T06:00:00Z"),
    hora_salida:ISODate("2025-07-02T08:00:00Z"),
    tiempo_total: 2,
    costo_total: 5800
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cb8"),
    cliente_id: ObjectId("686710062ce788c337c01c97"),
    zona_id: ObjectId("686719f9c512adf7b99d6e10"),
    sede_id: ObjectId("68670f052ce788c337c01c82"),
    hora_entrada:ISODate("2025-07-01T07:45:00Z"),
    hora_salida:ISODate("2025-07-01T10:45:00Z"),
    tiempo_total: 3,
    costo_total: 2550
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cb9"),
    cliente_id: ObjectId("686710062ce788c337c01c98"),
    zona_id: ObjectId("686719f9c512adf7b99d6e11"),
    sede_id: ObjectId("68670f052ce788c337c01c82"),
    hora_entrada:ISODate("2025-07-02T09:15:00Z"),
    hora_salida:ISODate("2025-07-02T15:15:00Z"),
    tiempo_total: 6,
    costo_total: 3060
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cba"),
    cliente_id: ObjectId("686710062ce788c337c01c99"),
    zona_id: ObjectId("686719f9c512adf7b99d6e12"),
    sede_id: ObjectId("68670f052ce788c337c01c82"),
    hora_entrada:ISODate("2025-07-03T10:00:00Z"),
    hora_salida:ISODate("2025-07-03T15:00:00Z"),
    tiempo_total: 5,
    costo_total: 13500
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cbb"),
    cliente_id: ObjectId("686710062ce788c337c01c9a"),
    zona_id: ObjectId("686719f9c512adf7b99d6e06"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-04T08:30:00Z"),
    hora_salida:ISODate("2025-07-04T11:00:00Z"),
    tiempo_total: 2.5,
    costo_total: 6250
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cbc"),
    cliente_id: ObjectId("686710062ce788c337c01c9b"),
    zona_id: ObjectId("686719f9c512adf7b99d6e07"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-05T07:00:00Z"),
    hora_salida:ISODate("2025-07-05T10:30:00Z"),
    tiempo_total: 3.5,
    costo_total: 5250
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cbd"),
    cliente_id: ObjectId("686710062ce788c337c01c9c"),
    zona_id: ObjectId("686719f9c512adf7b99d6e08"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-05T09:00:00Z"),
    hora_salida:ISODate("2025-07-05T11:30:00Z"),
    tiempo_total: 2.5,
    costo_total: 2000
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cbe"),
    cliente_id: ObjectId("686710062ce788c337c01c9d"),
    zona_id: ObjectId("686719f9c512adf7b99d6e09"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-06T08:00:00Z"),
    hora_salida:ISODate("2025-07-06T10:00:00Z"),
    tiempo_total: 2,
    costo_total: 10000
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cbf"),
    cliente_id: ObjectId("686710062ce788c337c01c9e"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0a"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-07T07:15:00Z"),
    hora_salida:ISODate("2025-07-07T11:15:00Z"),
    tiempo_total: 4,
    costo_total: 20000
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cc0"),
    cliente_id: ObjectId("686710062ce788c337c01c9f"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0b"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-07T10:00:00Z"),
    hora_salida:ISODate("2025-07-07T13:00:00Z"),
    tiempo_total: 3,
    costo_total: 15000
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cc1"),
    cliente_id: ObjectId("686710062ce788c337c01ca0"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0c"),
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    hora_entrada:ISODate("2025-07-08T09:00:00Z"),
    hora_salida:ISODate("2025-07-08T15:00:00Z"),
    tiempo_total: 6,
    costo_total: 28800
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cc2"),
    cliente_id: ObjectId("686710062ce788c337c01ca1"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0d"),
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    hora_entrada:ISODate("2025-07-08T08:00:00Z"),
    hora_salida:ISODate("2025-07-08T11:00:00Z"),
    tiempo_total: 3,
    costo_total: 7800
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cc3"),
    cliente_id: ObjectId("686710062ce788c337c01ca2"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0e"),
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    hora_entrada:ISODate("2025-07-09T07:00:00Z"),
    hora_salida:ISODate("2025-07-09T10:00:00Z"),
    tiempo_total: 3,
    costo_total: 4650
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cc4"),
    cliente_id: ObjectId("686710062ce788c337c01ca3"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0f"),
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    hora_entrada:ISODate("2025-07-09T09:30:00Z"),
    hora_salida:ISODate("2025-07-09T12:00:00Z"),
    tiempo_total: 2.5,
    costo_total: 7250
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cc5"),
    cliente_id: ObjectId("686710062ce788c337c01ca4"),
    zona_id: ObjectId("686719f9c512adf7b99d6e10"),
    sede_id: ObjectId("68670f052ce788c337c01c82"),
    hora_entrada:ISODate("2025-07-10T06:45:00Z"),
    hora_salida:ISODate("2025-07-10T11:45:00Z"),
    tiempo_total: 5,
    costo_total: 25500
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cc6"),
    cliente_id: ObjectId("686710062ce788c337c01ca5"),
    zona_id: ObjectId("686719f9c512adf7b99d6e11"),
    sede_id: ObjectId("68670f052ce788c337c01c82"),
    hora_entrada:ISODate("2025-07-10T08:30:00Z"),
    hora_salida:ISODate("2025-07-10T13:30:00Z"),
    tiempo_total: 5,
    costo_total: 7750
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cc7"),
    cliente_id: ObjectId("686710062ce788c337c01ca6"),
    zona_id: ObjectId("686719f9c512adf7b99d6e12"),
    sede_id: ObjectId("68670f052ce788c337c01c82"),
    hora_entrada:ISODate("2025-07-11T07:00:00Z"),
    hora_salida:ISODate("2025-07-11T11:00:00Z"),
    tiempo_total: 4,
    costo_total: 10800
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cc8"),
    cliente_id: ObjectId("686710062ce788c337c01ca7"),
    zona_id: ObjectId("686719f9c512adf7b99d6e13"),
    sede_id: ObjectId("68670f052ce788c337c01c82"),
    hora_entrada:ISODate("2025-07-11T10:30:00Z"),
    hora_salida:ISODate("2025-07-11T14:00:00Z"),
    tiempo_total: 3.5,
    costo_total: 10500
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cc9"),
    cliente_id: ObjectId("686710062ce788c337c01ca8"),
    zona_id: ObjectId("686719f9c512adf7b99d6e14"),
    sede_id: ObjectId("68670f052ce788c337c01c82"),
    hora_entrada:ISODate("2025-07-12T08:00:00Z"),
    hora_salida:ISODate("2025-07-12T11:00:00Z"),
    tiempo_total: 3,
    costo_total: 9000
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cca"),
    cliente_id: ObjectId("686710062ce788c337c01ca9"),
    zona_id: ObjectId("686719f9c512adf7b99d6e06"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-12T09:30:00Z"),
    hora_salida:ISODate("2025-07-12T13:30:00Z"),
    tiempo_total: 4,
    costo_total: 10000
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01ccb"),
    cliente_id: ObjectId("686710062ce788c337c01caa"),
    zona_id: ObjectId("686719f9c512adf7b99d6e07"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-13T08:00:00Z"),
    hora_salida:ISODate("2025-07-13T12:00:00Z"),
    tiempo_total: 4,
    costo_total: 6000
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01ccc"),
    cliente_id: ObjectId("686710062ce788c337c01cab"),
    zona_id: ObjectId("686719f9c512adf7b99d6e08"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-13T07:15:00Z"),
    hora_salida:ISODate("2025-07-13T11:15:00Z"),
    tiempo_total: 4,
    costo_total: 3200
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01ccd"),
    cliente_id: ObjectId("686710062ce788c337c01cac"),
    zona_id: ObjectId("686719f9c512adf7b99d6e09"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-14T06:00:00Z"),
    hora_salida:ISODate("2025-07-14T09:00:00Z"),
    tiempo_total: 3,
    costo_total: 15000
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cce"),
    cliente_id: ObjectId("686710062ce788c337c01cad"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0a"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-14T08:00:00Z"),
    hora_salida:ISODate("2025-07-14T13:00:00Z"),
    tiempo_total: 5,
    costo_total: 14000
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01ccf"),
    cliente_id: ObjectId("686710062ce788c337c01cae"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0b"),
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    hora_entrada:ISODate("2025-07-15T07:00:00Z"),
    hora_salida:ISODate("2025-07-15T10:00:00Z"),
    tiempo_total: 3,
    costo_total: 4800
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cd0"),
    cliente_id: ObjectId("686710062ce788c337c01caf"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0c"),
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    hora_entrada:ISODate("2025-07-15T09:30:00Z"),
    hora_salida:ISODate("2025-07-15T12:30:00Z"),
    tiempo_total: 3,
    costo_total: 7800
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cd1"),
    cliente_id: ObjectId("686710062ce788c337c01cb0"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0d"),
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    hora_entrada:ISODate("2025-07-16T08:00:00Z"),
    hora_salida:ISODate("2025-07-16T11:00:00Z"),
    tiempo_total: 3,
    costo_total: 22500
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cd2"),
    cliente_id: ObjectId("686710062ce788c337c01cb1"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0e"),
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    hora_entrada:ISODate("2025-07-16T07:30:00Z"),
    hora_salida:ISODate("2025-07-16T09:30:00Z"),
    tiempo_total: 2,
    costo_total: 3100
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cd3"),
    cliente_id: ObjectId("686710062ce788c337c01cb2"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0f"),
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    hora_entrada:ISODate("2025-07-17T06:00:00Z"),
    hora_salida:ISODate("2025-07-17T08:00:00Z"),
    tiempo_total: 2,
    costo_total: 5800
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cd4"),
    cliente_id: ObjectId("686710062ce788c337c01cb3"),
    zona_id: ObjectId("686719f9c512adf7b99d6e10"),
    sede_id: ObjectId("68670f052ce788c337c01c82"),
    hora_entrada:ISODate("2025-07-17T09:30:00Z"),
    hora_salida:ISODate("2025-07-17T12:30:00Z"),
    tiempo_total: 3,
    costo_total: 2550
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cd5"),
    cliente_id: ObjectId("686710062ce788c337c01cb4"),
    zona_id: ObjectId("686719f9c512adf7b99d6e11"),
    sede_id: ObjectId("68670f052ce788c337c01c82"),
    hora_entrada:ISODate("2025-07-18T08:00:00Z"),
    hora_salida:ISODate("2025-07-18T14:00:00Z"),
    tiempo_total: 6,
    costo_total: 3060
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cd6"),
    cliente_id: ObjectId("686710062ce788c337c01cb5"),
    zona_id: ObjectId("686719f9c512adf7b99d6e12"),
    sede_id: ObjectId("68670f052ce788c337c01c82"),
    hora_entrada:ISODate("2025-07-18T07:00:00Z"),
    hora_salida:ISODate("2025-07-18T12:00:00Z"),
    tiempo_total: 5,
    costo_total: 13500
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cd7"),
    cliente_id: ObjectId("686710062ce788c337c01cb6"),
    zona_id: ObjectId("686719f9c512adf7b99d6e06"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-19T08:00:00Z"),
    hora_salida:ISODate("2025-07-19T12:30:00Z"),
    tiempo_total: 4.5,
    costo_total: 11250
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cd8"),
    cliente_id: ObjectId("686710062ce788c337c01cb7"),
    zona_id: ObjectId("686719f9c512adf7b99d6e07"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-19T10:00:00Z"),
    hora_salida:ISODate("2025-07-19T13:00:00Z"),
    tiempo_total: 3,
    costo_total: 4500
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cd9"),
    cliente_id: ObjectId("686710062ce788c337c01cb8"),
    zona_id: ObjectId("686719f9c512adf7b99d6e08"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-20T07:30:00Z"),
    hora_salida:ISODate("2025-07-20T11:00:00Z"),
    tiempo_total: 3.5,
    costo_total: 2800
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cda"),
    cliente_id: ObjectId("686710062ce788c337c01cb9"),
    zona_id: ObjectId("686719f9c512adf7b99d6e09"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-20T09:00:00Z"),
    hora_salida:ISODate("2025-07-20T14:00:00Z"),
    tiempo_total: 5,
    costo_total: 25000
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cdb"),
    cliente_id: ObjectId("686710062ce788c337c01cba"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0a"),
    sede_id: ObjectId("68670f052ce788c337c01c80"),
    hora_entrada:ISODate("2025-07-21T08:00:00Z"),
    hora_salida:ISODate("2025-07-21T10:00:00Z"),
    tiempo_total: 2,
    costo_total: 5600
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cdc"),
    cliente_id: ObjectId("686710062ce788c337c01cbb"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0b"),
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    hora_entrada:ISODate("2025-07-21T11:30:00Z"),
    hora_salida:ISODate("2025-07-21T14:30:00Z"),
    tiempo_total: 3,
    costo_total: 4800
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cdd"),
    cliente_id: ObjectId("686710062ce788c337c01cbc"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0c"),
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    hora_entrada:ISODate("2025-07-22T06:00:00Z"),
    hora_salida:ISODate("2025-07-22T12:00:00Z"),
    tiempo_total: 6,
    costo_total: 15600
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cde"),
    cliente_id: ObjectId("686710062ce788c337c01cbd"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0d"),
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    hora_entrada:ISODate("2025-07-22T07:15:00Z"),
    hora_salida:ISODate("2025-07-22T11:15:00Z"),
    tiempo_total: 4,
    costo_total: 3600
},
{
    vehiculo_id: ObjectId("6867110d2ce788c337c01cdf"),
    cliente_id: ObjectId("686710062ce788c337c01cbe"),
    zona_id: ObjectId("686719f9c512adf7b99d6e0e"),
    sede_id: ObjectId("68670f052ce788c337c01c81"),
    hora_entrada:ISODate("2025-07-23T08:00:00Z"),
    hora_salida:ISODate("2025-07-23T10:30:00Z"),
    tiempo_total: 2.5,
    costo_total: 3875
}
])




