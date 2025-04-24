import config from '../../config.js';

/**
 * Carga la lista de los Ventas (en este ejemplo solo 3 Ventas)
 */
const listarTodosVentasQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM ventas LIMIT 0,3', (err, filas) => {
            // Si genera error, mostramos en la consola que es lo que falla
            if (err) {
                console.log(err);
                reject(err);
            } else {
                // Si no hay error, devolvemos los datos de la tabla 
                resolve(filas);
            }
        });
    });
};

/**
 * Buscar un Ventas por su ID (llave primaria)
 */
const listarVentasPorIdQuery = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM ventas WHERE id = ? LIMIT 1', [id], (err, filas) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(filas);
            }
        });
    });
};

/**
 * Guardar una nueva venta
 */
const crearVentaQuery = async (Venta) => {
    const { fecha} = Venta;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO ventas (fecha) VALUES (?)';
        config.query(sql, [fecha], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Actualizar un Venta por su ID
 */
const actualizarVentaQuery = (id, Venta) => {
    const { fecha} = Venta;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE ventas SET fecha =? WHERE id = ?';
        config.query(sql, [fecha, id], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Eliminar un Venta por su ID
 */
const eliminarVentaQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM ventas WHERE id = ?';
        config.query(sql, [id], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodosVentasQuery,
    listarVentasPorIdQuery,
    crearVentaQuery,
    actualizarVentaQuery,
    eliminarVentaQuery,   
}