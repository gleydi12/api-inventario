import { listarTodosProveedoresQuery,
  listarProveedoresPorIdQuery,
  actualizarProveedorQuery,
  crearProveedorQuery,
  eliminarProveedorQuery
} from '../../db/proveedores/proveedoresQueries.js';

const listarTodosProveedores= async (req, res) => {
  // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
// Try -> intentar
// Catch -> capturar el error
try {
  //  Ejecutar la consulta en la base de datos
  const Proveedores = await listarTodosProveedoresQuery();
  res.json(Proveedores);
} catch (error) {
  res.status(500).send(error);
}
};

const listarProveedoresPorId = async (req, res) => { 
  try {
    //  Ejecutar la consulta en la base de datos
    const Proveedores = await listarProveedoresPorIdQuery(req.params.id);
    res.json(Proveedores);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Crear un Proveedores
 */
const crearProveedor = async (req, res) => {
  console.log(req.body)
  try {
      const datosProveedore = req.body;
      const resultado = await crearProveedorQuery(datosProveedore);
      res.json({ mensaje: 'Proveedor creado con éxito', id: resultado.insertId });
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
 * Actualizar los datos de un Proveedore
 */
const actualizarProveedor = async (req, res) => {
  try {
      const id = req.params.id;
      const datosProveedore = req.body;
      const resultado = await actualizarProveedorQuery(id, datosProveedore);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Proveedor actualizado con éxito', id: id });
      } else {
          res.status(404).json({ mensaje: 'Proveedore no encontrado' });
      }
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
 * Eliminar un Proveedore
 */
const eliminarProveedor = async (req, res) => {
  try {
      const id = req.params.id;
      const resultado = await eliminarProveedorQuery(id);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Proveedor eliminado con éxito' });
      } else {
          res.status(404).json({ mensaje: 'Proveedor no encontrado' });
      }
  } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el Proveedore', error: error.message });
  }
};

export {
  listarTodosProveedores,
  listarProveedoresPorId,
  crearProveedor,
  actualizarProveedor,
  eliminarProveedor,
}