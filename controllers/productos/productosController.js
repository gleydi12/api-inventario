import { listarTodosProductosQuery,
  listarProductosPorIdQuery,
  actualizarProductoQuery,
  crearProductoQuery,
  eliminarProductoQuery
} from '../../db/productos/productosQueries.js';

const listarTodosProductos= async (req, res) => {
  // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
// Try -> intentar
// Catch -> capturar el error
try {
  //  Ejecutar la consulta en la base de datos
  const Productos = await listarTodosProductosQuery();
  res.json(Productos);
} catch (error) {
  res.status(500).send(error);
}
};

const listarProductosPorId = async (req, res) => { 
  try {
    //  Ejecutar la consulta en la base de datos
    const Productos = await listarProductosPorIdQuery(req.params.id);
    res.json(Productos);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Crear un Productos
 */
const crearProducto = async (req, res) => {
  console.log(req.body)
  try {
      const datosProducto = req.body;
      const resultado = await crearProductoQuery(datosProducto);
      res.json({ mensaje: 'Producto creado con éxito', id: resultado.insertId });
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
 * Actualizar los datos de un Producto
 */
const actualizarProducto = async (req, res) => {
  try {
      const id = req.params.id;
      const datosProducto = req.body;
      const resultado = await actualizarProductoQuery(id, datosProducto);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Producto actualizado con éxito', id: id });
      } else {
          res.status(404).json({ mensaje: 'Producto no encontrado' });
      }
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
 * Eliminar un Producto
 */
const eliminarProducto = async (req, res) => {
  try {
      const id = req.params.id;
      const resultado = await eliminarProductoQuery(id);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Producto eliminado con éxito' });
      } else {
          res.status(404).json({ mensaje: 'Producto no encontrado' });
      }
  } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el Producto', error: error.message });
  }
};

export {
  listarTodosProductos,
  listarProductosPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
}