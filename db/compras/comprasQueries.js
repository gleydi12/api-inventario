import config from '../../config.js';

/**
 * Carga la lista de los Compras (en este ejemplo solo 3 Compras)
 */
const listarTodosComprasQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM compras LIMIT 0,3', (err, filas) => {
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
 * Buscar un Compras por su ID (llave primaria)
 */
const listarComprasPorIdQuery = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM compras WHERE id = ? LIMIT 1', [id], (err, filas) => {
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
 * Guardar un nuevo estudiante
 */
const crearCompraQuery = async (Compra) => {
    const { fecha, id_proveedor} = Compra;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO Compras (fecha, id_proveedor) VALUES (?, ?)';
        config.query(sql, [fecha, id_proveedor], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Actualizar un Compra por su ID
 */
const actualizarCompraQuery = (id, Compra) => {
    const { fecha, id_proveedor} = Compra;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE compras SET fecha =?, id_proveedor =? WHERE id = ?';
        config.query(sql, [fecha, id_proveedor, id], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Eliminar un Compra por su ID
 */
const eliminarCompraQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM compras WHERE id = ?';
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
    listarTodosComprasQuery,
    listarComprasPorIdQuery,
    crearCompraQuery,
    actualizarCompraQuery,
    eliminarCompraQuery,   
}