import { Router } from 'express';

import {
    listarTodosVentas,
    listarVentasPorId,
    crearVenta,
    actualizarVenta,
    eliminarVenta,
} 
from '../../controllers/ventas/ventasController.js';

const VentasRouter = Router();


VentasRouter.get('/', listarTodosVentas);
VentasRouter.get('/:id', listarVentasPorId);
VentasRouter.post('/', crearVenta);
VentasRouter.put('/:id', actualizarVenta);
VentasRouter.delete('/:id', eliminarVenta);

export default VentasRouter;