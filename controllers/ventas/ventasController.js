import { listarTodosVentasQuery,
    listarVentasPorIdQuery,
    actualizarVentaQuery,
    crearVentaQuery,
    eliminarVentaQuery
  } from '../../db/Ventas/VentasQueries.js';
  
  const listarTodosVentas= async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
  // Try -> intentar
  // Catch -> capturar el error
  try {
    //  Ejecutar la consulta en la base de datos
    const Ventas = await listarTodosVentasQuery();
    res.json(Ventas);
  } catch (error) {
    res.status(500).send(error);
  }
  };
  
  const listarVentasPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const Ventas = await listarVentasPorIdQuery(req.params.id);
      res.json(Ventas);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear una Ventas
   */
  const crearVenta = async (req, res) => {
    console.log(req.body)
    try {
        const datosVenta = req.body;
        const resultado = await crearVentaQuery(datosVenta);
        res.json({ mensaje: 'Venta creada con éxito', id: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un Venta
   */
  const actualizarVenta = async (req, res) => {
    try {
        const id = req.params.id;
        const datosVenta = req.body;
        const resultado = await actualizarVentaQuery(id, datosVenta);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Venta actualizada con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'Venta no encontrada' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un Venta
   */
  const eliminarVenta = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarVentaQuery(id);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Venta eliminada con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Venta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la Venta', error: error.message });
    }
  };
  
  export {
    listarTodosVentas,
    listarVentasPorId,
    crearVenta,
    actualizarVenta,
    eliminarVenta,
  }