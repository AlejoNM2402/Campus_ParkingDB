// // 1.¿Cuántos parqueos se registraron por sede en el último mes?
const fechaUnMesAtras = new Date();
fechaUnMesAtras.setMonth(fechaUnMesAtras.getMonth() - 1);

// Se filtran los documentos de parqueos cuya hora_entrada sea mayor o igual a hace un mes.
db.parqueos.aggregate([
{
    $match: {
    hora_entrada: { $gte: fechaUnMesAtras }
    }
},
{
    // Agrupamos por sede_id y contamos los parqueos con $sum: 1
    $group: {
    _id: "$sede_id",
    total_parqueos: { $sum: 1 }
    }
},
{
    // Enlazamos con la colección sedes para obtener el nombre de la sede
    $lookup: { 
    from: "sedes",
    localField: "_id",
    foreignField: "_id",
    as: "sede"
    }
},
{
    // Convertimos el array "sede" en un objeto para facilitar el acceso a sus campos
    $unwind: "$sede"
},
{
    // Proyectamos el nombre de la sede y el total de parqueos registrados
    $project: {
    sede: "$sede.nombre",
    total_parqueos: 1
    }
}
])



// 2.¿Cuáles son las zonas más ocupadas en cada sede?
db.parqueos.aggregate([
{
    // Agrupamos por sede y zona, contando cuántas veces se usó cada combinación
    $group: {
    _id: { sede: "$sede_id", zona: "$zona_id" },
    ocupaciones: { $sum: 1 }
    }
},
{
    // Ordenamos por sede ascendente y ocupaciones descendente
    $sort: { "_id.sede": 1, ocupaciones: -1 }
},
{
    // Agrupamos nuevamente solo por sede, y empujamos las zonas ordenadas por más uso
    $group: {
    _id: "$_id.sede",
    zonas_mas_ocupadas: { $push: { zona: "$_id.zona", ocupaciones: "$ocupaciones" } }
    }
},
{
    // Mostramos solo las 3 zonas más ocupadas por sede
    $project: {
    zonas_mas_ocupadas: { $slice: ["$zonas_mas_ocupadas", 3] } 
    }
}
])



// 3.¿Cuál es el ingreso total generado por parqueo en cada sede?
db.parqueos.aggregate([
{
    // Agrupamos por sede y sumamos los valores de costo_total
    $group: {
    _id: "$sede_id",
    ingreso_total: { $sum: "$costo_total" }
    }
},
{
    // Hacemos un join con la colección de sedes para obtener su nombre
    $lookup: {
    from: "sedes",
    localField: "_id",
    foreignField: "_id",
    as: "sede"
    }
},
{
    // Desempaquetamos el array "sede"
    $unwind: "$sede"
},
{
    // Mostramos el nombre de la sede y el ingreso total
    $project: {
    sede: "$sede.nombre",
    ingreso_total: 1
    }
}
])


// 4.¿Qué cliente ha usado más veces el parqueadero?
db.parqueos.aggregate([
{
    // Agrupamos por cliente y contamos cuántos parqueos hizo
    $group: {
    _id: "$cliente_id",
    usos: { $sum: 1 }
    }
},
{
    // Ordenamos de mayor a menor para saber quién usó más veces el parqueadero
    $sort: { usos: -1 }
},
{
    // Solo queremos el cliente con más usos
    $limit: 1
},
{
    // Hacemos un join con la colección usuarios para obtener los datos del cliente
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
    // Proyectamos el nombre del cliente y la cantidad de usos
    $project: {
    cliente: "$cliente.nombre",
    usos: 1
    }
}
])


// 4.¿Qué cliente ha usado más veces el parqueadero?
db.parqueos.aggregate([
{
    // Agrupamos por cliente y contamos cuántos parqueos hizo
    $group: {
    _id: "$cliente_id",
    usos: { $sum: 1 }
    }
},
{
    // Ordenamos de mayor a menor para saber quién usó más veces el parqueadero
    $sort: { usos: -1 }
},
{
    // Solo queremos el cliente con más usos
    $limit: 1
},
{
    // Hacemos un join con la colección usuarios para obtener los datos del cliente
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
    // Proyectamos el nombre del cliente y la cantidad de usos
    $project: {
    cliente: "$cliente.nombre",
    usos: 1
    }
}
])


// 6. Dado un cliente, mostrar su historial de parqueos (fecha, sede, zona, tipo de vehículo, tiempo y costo).
const clienteId = ObjectId("686710062ce788c337c01c8d");

db.parqueos.aggregate([
{
    // Filtramos solo los parqueos del cliente
    $match: { cliente_id: clienteId }
},
{
    // Join con sedes para obtener el nombre de la sede
    $lookup: {
    from: "sedes",
    localField: "sede_id",
    foreignField: "_id",
    as: "sede"
    }
},
{ $unwind: "$sede" },
{
    // Join con zonas para obtener el nombre de la zona
    $lookup: {
    from: "zonas",
    localField: "zona_id",
    foreignField: "_id",
    as: "zona"
    }
},
{ $unwind: "$zona" },
{
    // Join con vehículos para conocer tipo, placa, etc.
    $lookup: {
    from: "vehiculos",
    localField: "vehiculo_id",
    foreignField: "_id",
    as: "vehiculo"
    }
},
{ $unwind: "$vehiculo" },
{
    // Proyectamos los datos que nos interesan
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
    // Filtramos los parqueos en los que el vehículo aún no ha salido o su salida es en el futuro
    $match: {
    $or: [
        { hora_salida: null },
        { hora_salida: { $gt: ahora } }
    ]
    }
},
{
    // Join con vehículos para obtener su información
    $lookup: {
    from: "vehiculos",
    localField: "vehiculo_id",
    foreignField: "_id",
    as: "vehiculo"
    }
},
{ $unwind: "$vehiculo" },
{
    // Agrupamos por sede, acumulando los vehículos parqueados
    $group: {
    _id: "$sede_id",
    vehiculos_actuales: { $push: "$vehiculo" }
    }
},
{
    // Join con sedes para obtener el nombre
    $lookup: {
    from: "sedes",
    localField: "_id",
    foreignField: "_id",
    as: "sede"
    }
},
{ $unwind: "$sede" },
{
    // Mostramos el nombre de la sede y los vehículos actuales
    $project: {
    sede: "$sede.nombre",
    vehiculos_actuales: 1
    }
}
])


// 8. Listar zonas que han excedido su capacidad de parqueo en algún momento.
db.parqueos.aggregate([
{
    // Join con zonas para acceder a su capacidad máxima
    $lookup: {
    from: "zonas",
    localField: "zona_id",
    foreignField: "_id",
    as: "zona"
    }
},
{ $unwind: "$zona" },
{
    // Agrupamos por zona_id y contamos cuántos parqueos se han registrado ahí
    $group: {
    _id: "$zona_id",
    nombre_zona: { $first: "$zona.nombre" },
    capacidad: { $first: "$zona.capacidad_maxima" },
    total_parqueos: { $sum: 1 }
    }
},
{
    // Filtramos solo aquellas zonas donde el total de parqueos supera la capacidad
    $match: {
    $expr: { $gt: ["$total_parqueos", "$capacidad"] }
    }
},
{
    // Proyectamos los datos relevantes
    $project: {
    _id: 0,
    zona: "$nombre_zona",
    total_parqueos: 1,
    capacidad: 1
    }
}
])


