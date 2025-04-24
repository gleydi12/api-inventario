import { listarTodosDetalles_compraQuery,
    listarDetalles_compraPorIdQuery,
    actualizarDetalles_compraQuery,
    crearDetalles_compraQuery,
    eliminarDetalles_compraQuery
  } from '../../db/detalles_compra/detalles_compraQueries.js';
  
  const listarTodosDetalles_compra= async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
  // Try -> intentar
  // Catch -> capturar el error
  try {
    //  Ejecutar la consulta en la base de datos
    const Detalles_compra = await listarTodosDetalles_compraQuery();
    res.json(Detalles_compra);
  } catch (error) {
    res.status(500).send(error);
  }
  };
  
  const listarDetalles_compraPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const Detalles_compra= await listarDetalles_compraPorIdQuery(req.params.id);
      res.json(Detalles_compra);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un Detalle_compras
   */
  const crearDetalles_compra = async (req, res) => {
    console.log(req.body)
    try {
        const datosDetalles_compra = req.body;
        const resultado = await crearDetalles_compraQuery(datosDetalles_compra);
        res.json({ mensaje: 'Detalle_compra creada con éxito', id: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un Detalle_compra
   */
  const actualizarDetalles_compra = async (req, res) => {
    try {
        const id = req.params.id;
        const datosDetalles_compra = req.body;
        const resultado = await actualizarDetalles_compraQuery(id, datosDetalles_compra);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Detalle_compra actualizada con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'Detalle_compra no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un Detalle_compra
   */
  const eliminarDetalles_compra = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarDetalles_compraQuery(id);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Detalle_compra eliminada con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Detalle_compra no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la Detalle_compra', error: error.message });
    }
  };
  
  export {
    listarTodosDetalles_compra,
    listarDetalles_compraPorId,
    crearDetalles_compra,
    actualizarDetalles_compra,
    eliminarDetalles_compra,
  }