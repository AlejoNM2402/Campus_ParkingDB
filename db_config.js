db.createCollection("usuarios", {
validator: {
    $jsonSchema: {
    bsonType: "object",
    required: ["nombre", "rol", "correo"],
    properties: {
        nombre: {
        bsonType: "string",
        description: "El nombre es obligatorio y debe ser una cadena de texto"
        },
        rol: {
        enum: ["admin", "empleado", "cliente"],
        description: "El rol debe ser uno de: admin, empleado o cliente"
        },
        correo: {
        bsonType: "string",
        pattern: "^.+@.+\\..+$",
        description: "Debe ser un correo válido"
        },
        sede_id: {
        bsonType: "objectId",
        description: "Solo para empleados: referencia a la sede"
        }
    }
    }
},
validationLevel: "strict",
validationAction: "error"
});


db.createCollection("vehiculos", {
validator: {
    $jsonSchema: {
    bsonType: "object",
    required: ["placa", "tipo", "cliente_id"],
    properties: {
        placa: {
        bsonType: "string",
          pattern: "^[A-Z]{3}[0-9]{3}$", // ej: ABC123
        description: "Debe tener formato de 3 letras y 3 números, como ABC123"
        },
        tipo: {
        enum: ["carro", "moto", "bicicleta", "camión"],
        description: "Debe ser uno de los tipos válidos"
        },
        cliente_id: {
        bsonType: "objectId",
        description: "Debe referenciar el ID de un cliente existente"
        }
    }
    }
},
validationLevel: "strict",
validationAction: "error"
});


db.createCollection("sedes", {
validator: {
    $jsonSchema: {
    bsonType: "object",
    required: ["nombre", "ciudad"],
    properties: {
        nombre: {
        bsonType: "string",
        description: "El nombre de la sede es obligatorio y debe ser un string"
        },
        ciudad: {
        bsonType: "string",
        description: "La ciudad de la sede es obligatoria y debe ser un string"
        }
    }
    }
},
validationLevel: "strict",
validationAction: "error"
});



db.createCollection("zonas", {
validator: {
    $jsonSchema: {
    bsonType: "object",
    required: [
        "nombre",
        "sede_id",
        "tipo_permitido",
        "capacidad_maxima",
        "cupos_disponibles",
        "tarifa"
    ],
    properties: {
        nombre: {
        bsonType: "string",
        description: "El nombre de la zona es obligatorio y debe ser un string"
        },
        sede_id: {
        bsonType: "objectId",
        description: "El ID de la sede es obligatorio y debe ser un entero (relación con sedes)"
        },
        tipo_permitido: {
        enum: ["carro", "moto", "bicicleta", "camión"],
        description: "Debe ser uno de los tipos de vehículos permitidos"
        },
        capacidad_maxima: {
        bsonType: "int",
        minimum: 1,
        description: "Debe ser un número entero mayor que 0"
        },
        cupos_disponibles: {
        bsonType: "int",
        minimum: 0,
        description: "Debe ser un número entero mayor o igual a 0"
        },
        tarifa: {
        bsonType: "double",
        minimum: 0,
        description: "La tarifa debe ser un número decimal mayor o igual a 0"
        }
    }
    }
},
validationLevel: "strict",
validationAction: "error"
});




db.createCollection("parqueos", {
validator: {
    $jsonSchema: {
    bsonType: "object",
    required: ["vehiculo_id", "zona_id", "sede_id", "hora_entrada"],
    properties: {
        vehiculo_id: {
        bsonType: "objectId",
        description: "ID del vehículo que se estaciona, obligatorio"
        },
        zona_id: {
        bsonType: "objectId",
        description: "ID de la zona en la que se estaciona, obligatorio"
        },
        sede_id: {
        bsonType: "objectId",
        description: "ID de la sede donde ocurre el parqueo, obligatorio"
        },
        hora_entrada: {
        bsonType: "date",
        description: "Fecha y hora de entrada, obligatoria"
        },
        hora_salida: {
        bsonType: ["date", "null"],
        description: "Fecha y hora de salida, puede ser null si aún está activo"
        },
        tiempo_total: {
        bsonType: ["double", "null"],
        minimum: 0,
        description: "Tiempo total del parqueo en horas (opcional o null si no ha salido)"
        },
        costo_total: {
        bsonType: ["double", "null"],
        minimum: 0,
        description: "Costo total del parqueo (opcional o null si no ha salido)"
        }
    }
    }
},
validationLevel: "strict",
validationAction: "error"
});



