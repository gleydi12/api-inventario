import { listarTodosComprasQuery,
  listarComprasPorIdQuery,
  actualizarCompraQuery,
  crearCompraQuery,
  eliminarCompraQuery
} from '../../db/compras/comprasQueries.js';

const listarTodosCompras= async (req, res) => {
  // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
// Try -> intentar
// Catch -> capturar el error
try {
  //  Ejecutar la consulta en la base de datos
  const Compras = await listarTodosComprasQuery();
  res.json(Compras);
} catch (error) {
  res.status(500).send(error);
}
};

const listarComprasPorId = async (req, res) => { 
  try {
    //  Ejecutar la consulta en la base de datos
    const Compras = await listarComprasPorIdQuery(req.params.id);
    res.json(Compras);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Crear un Compras
 */
const crearCompra = async (req, res) => {
  console.log(req.body)
  try {
      const datosCompra = req.body;
      const resultado = await crearCompraQuery(datosCompra);
      res.json({ mensaje: 'Compra creada con éxito', id: resultado.insertId });
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
 * Actualizar los datos de un Compra
 */
const actualizarCompra = async (req, res) => {
  try {
      const id = req.params.id;
      const datosCompra = req.body;
      const resultado = await actualizarCompraQuery(id, datosCompra);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Compra actualizada con éxito', id: id });
      } else {
          res.status(404).json({ mensaje: 'Compra no encontrado' });
      }
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
 * Eliminar un Compra
 */
const eliminarCompra = async (req, res) => {
  try {
      const id = req.params.id;
      const resultado = await eliminarCompraQuery(id);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Compra eliminada con éxito' });
      } else {
          res.status(404).json({ mensaje: 'Compra no encontrado' });
      }
  } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar la Compra', error: error.message });
  }
};

export {
  listarTodosCompras,
  listarComprasPorId,
  crearCompra,
  actualizarCompra,
  eliminarCompra,
}