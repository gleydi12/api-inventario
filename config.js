import mysql from 'mysql2';

const config= mysql.createConnection({
    host:'127.0.0.1',
    user:'user_sistema',
    password:'gleydi',
    database:'inventario',
    port: 3306
})

//validar la coneccion ala base de datos
config.connect(function (err){
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conexion exitosa con el id' + config.threadId);
})
export default config;