const { MongoClient, ObjectId } = require("mongodb");

// URI del cluster de mong atlas con la contraceña del mismo 
const uri = "mongodb+srv://alejonaranjo:alejo2402@alejandro.zn6aqic.mongodb.net/";
const client = new MongoClient(uri);

async function registrarIngreso() {
const session = client.startSession();

try {
    await client.connect();

    const db = client.db("campus_parking");
    const parqueosCol = db.collection("parqueos");
    const zonasCol = db.collection("zonas");

    // Simulación de datos de ingreso
    const zonaId = new ObjectId("686719f9c512adf7b99d6e06");
    const clienteId = new ObjectId("686710062ce788c337c01c8d");
    const vehiculoId = new ObjectId("6867110d2ce788c337c01cae");

    // Iniciar la transacción
    session.startTransaction();

    // Inserta un nuevo parqueo
    const nuevoParqueo = {
    vehiculo_id: vehiculoId,
    cliente_id: clienteId,
    zona_id: zonaId,
    sede_id: new ObjectId("68670f052ce788c337c01c80"),
    hora_entrada: new Date("2025-07-04T08:00:00Z"),
    hora_salida: new Date("2025-07-04T11:00:00Z"),
    tiempo_total: 3,
    costo_total: 7500
    };

    await parqueosCol.insertOne(nuevoParqueo, { session });

    // Disminuye los cupos disponibles en la zona
    const updateZona = await zonasCol.updateOne(
      { _id: zonaId, cupos_disponibles: { $gt: 0 } }, // Validar que haya cupos
    { $inc: { cupos_disponibles: -1 } },
    { session }
    );

    // Valida si no se pudo actualizar la zona (por ejemplo, cupos en 0)
    if (updateZona.matchedCount === 0) {
    throw new Error("No hay cupos disponibles en la zona.");
    }

    // Si todo fue exitoso, confirmar la transacción
    await session.commitTransaction();
    console.log("Ingreso registrado exitosamente y cupo actualizado.");

} catch (error) {
    // Si algo falla, revertir la transacción
    await session.abortTransaction();
    console.error("Transacción abortada. Motivo:", error.message);
} finally {
    // Cierra la sesión y la conexión
    await session.endSession();
    await client.close();
}
}

registrarIngreso();
