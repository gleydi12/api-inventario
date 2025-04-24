import config from '../../config.js';

/**
 * Carga la lista de los Detalle_compras (en este ejemplo solo 3 Detalle_compras)
 */
const listarTodosDetalles_compraQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM detalles_compra LIMIT 0,3', (err, filas) => {
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
 * Buscar un Detalle_compras por su ID (llave primaria)
 */
const listarDetalles_compraPorIdQuery = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM detalles_compra WHERE id = ? LIMIT 1', [id], (err, filas) => {
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
 * Guardar un nuevo detalle_compra
 */
const crearDetalles_compraQuery = async (Detalles_compra) => {
    const { id_compra, id_proveedor, cantidad, precio_unitario} = Detalles_compra;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO detalles_compra (id_compra, id_proveedor, cantidad, precio_unitario) VALUES (?, ?, ?, ?)';
        config.query(sql, [id_compra, id_proveedor, cantidad, precio_unitario], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Actualizar un Detalle_compra por su ID
 */
const actualizarDetalles_compraQuery = (id, Detalles_compra) => {
    const { id_compra, id_proveedor, cantidad, precio_unitario} = Detalles_compra;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE detalles_compra SET id_compra =?, id_proveedor =?, cantidad =?, precio_unitario =? WHERE id = ?';
        config.query(sql, [id_compra, id_proveedor, cantidad, precio_unitario, id], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Eliminar un Detalle_compra por su ID
 */
const eliminarDetalles_compraQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM detalles_compra WHERE id = ?';
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
    listarTodosDetalles_compraQuery,
    listarDetalles_compraPorIdQuery,
    crearDetalles_compraQuery,
    actualizarDetalles_compraQuery,
    eliminarDetalles_compraQuery,   
}