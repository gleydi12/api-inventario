import { Router } from 'express';

import {
    listarTodosDetalles_compra,
    listarDetalles_compraPorId,
    crearDetalles_compra,
    actualizarDetalles_compra,
    eliminarDetalles_compra,
} 
from '../../controllers/detalles_compra/detalles_compraController.js';

const Detalles_compraRouter = Router();


Detalles_compraRouter.get('/',  listarTodosDetalles_compra);
Detalles_compraRouter.get('/:id', listarDetalles_compraPorId);
Detalles_compraRouter.post('/', crearDetalles_compra);
Detalles_compraRouter.put('/:id', actualizarDetalles_compra);
Detalles_compraRouter.delete('/:id', eliminarDetalles_compra);

export default Detalles_compraRouter;