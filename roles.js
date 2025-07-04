// Asignar roles a los usuarios
//Clientes
db.usuarios.find({ rol: "cliente" }).forEach(cliente => {
db.createUser({
    user: cliente.correo,
    pwd: cliente.documento,
    roles: [{ role: "read", db: "campus_parking" }]
})
})

//Empleados
db.usuarios.find({ rol: "empleado" }).forEach(empleado => {
db.createUser({
    user: empleado.correo,
    pwd: empleado.documento,
    roles: [{ role: "readWrite", db: "campus_parking" }]
})
})

//Administradores
db.usuarios.find({ rol: "administrador" }).forEach(admin => {
db.createUser({
    user: admin.correo,
    pwd: admin.documento,
    roles: [
    { role: "readWrite", db: "campus_parking" },
    { role: "dbAdmin", db: "campus_parking" },
    { role: "userAdmin", db: "campus_parking" }
    ]
})
})


// Se buscan los documentos en la colección "usuarios" y se les asignan permisos segun su rol