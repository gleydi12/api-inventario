import { Router } from 'express';

import {
    listarTodosCompras,
    listarComprasPorId,
    crearCompra,
    actualizarCompra,
    eliminarCompra,
} 
from '../../controllers/compras/comprasController.js';

const ComprasRouter = Router();


ComprasRouter.get('/', listarTodosCompras);
ComprasRouter.get('/:id', listarComprasPorId);
ComprasRouter.post('/', crearCompra);
ComprasRouter.put('/:id', actualizarCompra);
ComprasRouter.delete('/:id', eliminarCompra);

export default ComprasRouter;