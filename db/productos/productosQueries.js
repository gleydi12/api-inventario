import config from '../../config.js';

/**
 * Carga la lista de los Productos (en este ejemplo solo 3 Productos)
 */
const listarTodosProductosQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM productos LIMIT 0,3', (err, filas) => {
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
 * Buscar un productos por su ID (llave primaria)
 */
const listarProductosPorIdQuery = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM productos WHERE id = ? LIMIT 1', [id], (err, filas) => {
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
const crearProductoQuery = async (Producto) => {
    const { nombre, descripcion, precio_venta, stock} = Producto;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO productos (nombre, descripcion, precio_venta, stock) VALUES (?, ?, ?, ?)';
        config.query(sql, [nombre, descripcion, precio_venta, stock], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Actualizar un Producto por su ID
 */
const actualizarProductoQuery = (id, Producto) => {
    const { nombre, descripcion, precio_venta, stock} = Producto;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE productos SET nombre = ?, descripcion = ?, precio_venta =?, stock =? WHERE id = ?';
        config.query(sql, [nombre, descripcion, precio_venta, stock, id], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Eliminar un Producto por su ID
 */
const eliminarProductoQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM productos WHERE id = ?';
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
    listarTodosProductosQuery,
    listarProductosPorIdQuery,
    crearProductoQuery,
    actualizarProductoQuery,
    eliminarProductoQuery,   
}