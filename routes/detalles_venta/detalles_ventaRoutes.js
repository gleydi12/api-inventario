import { Router } from 'express';

import {
    listarTodosDetalles_venta,
    listarDetalles_ventaPorId,
    crearDetalles_venta,
    actualizarDetalles_venta,
    eliminarDetalles_venta,
} 
from '../../controllers/detalles_venta/detalles_ventaController.js';

const Detalles_ventaRouter = Router();


Detalles_ventaRouter.get('/',  listarTodosDetalles_venta);
Detalles_ventaRouter.get('/:id', listarDetalles_ventaPorId);
Detalles_ventaRouter.post('/', crearDetalles_venta);
Detalles_ventaRouter.put('/:id', actualizarDetalles_venta);
Detalles_ventaRouter.delete('/:id', eliminarDetalles_venta);

export default Detalles_ventaRouter;