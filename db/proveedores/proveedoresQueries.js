import config from '../../config.js';

/**
 * Carga la lista de los Proveedores (en este ejemplo solo 3 Proveedores)
 */
const listarTodosProveedoresQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM proveedores LIMIT 0,3', (err, filas) => {
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
 * Buscar un Proveedor por su ID (llave primaria)
 */
const listarProveedoresPorIdQuery = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM proveedores WHERE id = ? LIMIT 1', [id], (err, filas) => {
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
 * Guardar un nuevo proveedor
 */
const crearProveedorQuery = async (Proveedor) => {
    const { nombre, telefono, email} = Proveedor;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO proveedores (nombre, telefono, email) VALUES (?, ?, ?)';
        config.query(sql, [nombre, telefono, email], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Actualizar un Proveedore por su ID
 */
const actualizarProveedorQuery = (id, Proveedor) => {
    const { nombre, telefono, email} = Proveedor;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE proveedores SET nombre =?, telefono =?, email =? WHERE id = ?';
        config.query(sql, [nombre, telefono, email, id], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Eliminar un Proveedore por su ID
 */
const eliminarProveedorQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM proveedores WHERE id = ?';
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
    listarTodosProveedoresQuery,
    listarProveedoresPorIdQuery,
    crearProveedorQuery,
    actualizarProveedorQuery,
    eliminarProveedorQuery,   
}