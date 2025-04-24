import config from '../../config.js';

/**
 * Carga la lista de los Detalle_compras (en este ejemplo solo 3 Detalle_compras)
 */
const listarTodosDetalles_ventaQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM detalles_venta LIMIT 0,3', (err, filas) => {
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
const listarDetalles_ventaPorIdQuery = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM detalles_venta WHERE id = ? LIMIT 1', [id], (err, filas) => {
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
const crearDetalles_ventaQuery = async (Detalles_venta) => {
    const { id_venta, id_producto, cantidad, precio_unitario} = Detalles_venta;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO detalles_venta (id_venta, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)';
        config.query(sql, [id_venta, id_producto, cantidad, precio_unitario], (err, resultado) => {
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
const actualizarDetalles_ventaQuery = (id, Detalles_venta) => {
    const { id_venta, id_producto, cantidad, precio_unitario} = Detalles_venta;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE detalles_venta SET id_venta =?, id_producto =?, cantidad =?, precio_unitario =? WHERE id = ?';
        config.query(sql, [id_venta, id_producto, cantidad, precio_unitario, id], (err, resultado) => {
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
const eliminarDetalles_ventaQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM detalles_venta WHERE id = ?';
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
    listarTodosDetalles_ventaQuery,
    listarDetalles_ventaPorIdQuery,
    crearDetalles_ventaQuery,
    actualizarDetalles_ventaQuery,
    eliminarDetalles_ventaQuery,   
}