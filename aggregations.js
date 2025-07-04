// 1.¿Cuántos parqueos se registraron por sede en el último mes?
const fechaUnMesAtras = new Date();
fechaUnMesAtras.setMonth(fechaUnMesAtras.getMonth() - 1);

db.parqueos.aggregate([
{
    $match: {
    hora_entrada: { $gte: fechaUnMesAtras }
    }
},
{
    $group: {
    _id: "$sede_id",
    total_parqueos: { $sum: 1 }
    }
},
{
    $lookup: {  // para traer info de la sede si tienes otra colección
    from: "sedes",
    localField: "_id",
    foreignField: "_id",
    as: "sede"
    }
},
{
    $unwind: "$sede"
},
{
    $project: {
    sede: "$sede.nombre",
    total_parqueos: 1
    }
}
])


// 2.¿Cuáles son las zonas más ocupadas en cada sede?
db.parqueos.aggregate([
{
    $group: {
    _id: { sede: "$sede_id", zona: "$zona_id" },
    ocupaciones: { $sum: 1 }
    }
},
{
    $sort: { "_id.sede": 1, ocupaciones: -1 }
},
{
    $group: {
    _id: "$_id.sede",
    zonas_mas_ocupadas: { $push: { zona: "$_id.zona", ocupaciones: "$ocupaciones" } }
    }
},
{
    $project: {
      zonas_mas_ocupadas: { $slice: ["$zonas_mas_ocupadas", 3] } // Top 3 zonas más ocupadas por sede
    }
}
])


// 3.¿Cuál es el ingreso total generado por parqueo en cada sede?
db.parqueos.aggregate([
{
    $group: {
    _id: "$sede_id",
    ingreso_total: { $sum: "$costo_total" }
    }
},
{
    $lookup: {
    from: "sedes",
    localField: "_id",
    foreignField: "_id",
    as: "sede"
    }
},
{
    $unwind: "$sede"
},
{
    $project: {
    sede: "$sede.nombre",
    ingreso_total: 1
    }
}
])


// 4.¿Qué cliente ha usado más veces el parqueadero?
db.parqueos.aggregate([
{
    $group: {
    _id: "$cliente_id",
    usos: { $sum: 1 }
    }
},
{
    $sort: { usos: -1 }
},
{
    $limit: 1
},
{
    $lookup: {
    from: "usuarios",
    localField: "_id",
    foreignField: "_id",
    as: "cliente"
    }
},
{
    $unwind: "$cliente"
},
{
    $project: {
    cliente: "$cliente.nombre",
    usos: 1
    }
}
])


// 5.¿Qué tipo de vehículo es más frecuente por sede?
db.parqueos.aggregate([
{
    $lookup: {
    from: "vehiculos",
    localField: "vehiculo_id",
    foreignField: "_id",
    as: "vehiculo"
    }
},
{
    $unwind: "$vehiculo"
},
{
    $group: {
    _id: { sede: "$sede_id", tipo_vehiculo: "$vehiculo.tipo" },
    count: { $sum: 1 }
    }
},
{
    $sort: { "_id.sede": 1, count: -1 }
},
{
    $group: {
    _id: "$_id.sede",
    tipo_mas_frecuente: { $first: "$_id.tipo_vehiculo" },
    count: { $first: "$count" }
    }
},
{
    $lookup: {
    from: "sedes",
    localField: "_id",
    foreignField: "_id",
    as: "sede"
    }
},
{
    $unwind: "$sede"
},
{
    $project: {
    sede: "$sede.nombre",
    tipo_mas_frecuente: 1,
    count: 1
    }
}
])


// 6. Dado un cliente, mostrar su historial de parqueos (fecha, sede, zona, tipo de vehículo, tiempo y costo).
const clienteId = ObjectId("686710062ce788c337c01c8d");

db.parqueos.aggregate([
{
    $match: { cliente_id: clienteId }
},
{
    $lookup: {
    from: "sedes",
    localField: "sede_id",
    foreignField: "_id",
    as: "sede"
    }
},
{ $unwind: "$sede" },
{
    $lookup: {
    from: "zonas",
    localField: "zona_id",
    foreignField: "_id",
    as: "zona"
    }
},
{ $unwind: "$zona" },
{
    $lookup: {
    from: "vehiculos",
    localField: "vehiculo_id",
    foreignField: "_id",
    as: "vehiculo"
    }
},
{ $unwind: "$vehiculo" },
{
    $project: {
    fecha: "$hora_entrada",
    sede: "$sede.nombre",
    zona: "$zona.nombre",
    tipo_vehiculo: "$vehiculo.tipo",
    tiempo_total: 1,
    costo_total: 1
    }
}
])


// 7. Mostrar los vehículos parqueados actualmente en cada sede.
const ahora = new Date();

db.parqueos.aggregate([
{
    $match: {
    $or: [
        { hora_salida: null },
        { hora_salida: { $gt: ahora } }
    ]
    }
},
{
    $lookup: {
    from: "vehiculos",
    localField: "vehiculo_id",
    foreignField: "_id",
    as: "vehiculo"
    }
},
{ $unwind: "$vehiculo" },
{
    $group: {
    _id: "$sede_id",
    vehiculos_actuales: { $push: "$vehiculo" }
    }
},
{
    $lookup: {
    from: "sedes",
    localField: "_id",
    foreignField: "_id",
    as: "sede"
    }
},
{ $unwind: "$sede" },
{
    $project: {
    sede: "$sede.nombre",
    vehiculos_actuales: 1
    }
}
])


//8. Listar zonas que han excedido su capacidad de parqueo en algún momento.
db.parqueos.aggregate([
{
    $lookup: {
    from: "zonas",
    localField: "zona_id",
    foreignField: "_id",
    as: "zona"
    }
},
{ $unwind: "$zona" },
{
    $group: {
    _id: "$zona_id",
    nombre_zona: { $first: "$zona.nombre" },
    capacidad: { $first: "$zona.capacidad_maxima" },
    total_parqueos: { $sum: 1 }
    }
},
{
    $match: {
    $expr: { $gt: ["$total_parqueos", "$capacidad"] }
    }
},
{
    $project: {
    _id: 0,
    zona: "$nombre_zona",
    total_parqueos: 1,
    capacidad: 1
    }
}
])

