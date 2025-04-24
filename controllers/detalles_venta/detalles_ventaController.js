import { listarTodosDetalles_ventaQuery,
    listarDetalles_ventaPorIdQuery,
    actualizarDetalles_ventaQuery,
    crearDetalles_ventaQuery,
    eliminarDetalles_ventaQuery
  } from '../../db/detalles_venta/detalles_ventaQueries.js';
  
  const listarTodosDetalles_venta= async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
  // Try -> intentar
  // Catch -> capturar el error
  try {
    //  Ejecutar la consulta en la base de datos
    const Detalles_venta = await listarTodosDetalles_ventaQuery();
    res.json(Detalles_venta);
  } catch (error) {
    res.status(500).send(error);
  }
  };
  
  const listarDetalles_ventaPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const Detalles_venta= await listarDetalles_ventaPorIdQuery(req.params.id);
      res.json(Detalles_venta);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un Detalle_compras
   */
  const crearDetalles_venta = async (req, res) => {
    console.log(req.body)
    try {
        const datosDetalles_venta = req.body;
        const resultado = await crearDetalles_ventaQuery(datosDetalles_venta);
        res.json({ mensaje: 'Detalle_compra creada con éxito', id: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un Detalle_compra
   */
  const actualizarDetalles_venta = async (req, res) => {
    try {
        const id = req.params.id;
        const datosDetalles_venta = req.body;
        const resultado = await actualizarDetalles_ventaQuery(id, datosDetalles_venta);
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
  const eliminarDetalles_venta = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarDetalles_ventaQuery(id);
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
    listarTodosDetalles_venta,
    listarDetalles_ventaPorId,
    crearDetalles_venta,
    actualizarDetalles_venta,
    eliminarDetalles_venta,
  }