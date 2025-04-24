import { Router } from 'express';

import {
    listarTodosProveedores,
    listarProveedoresPorId,
    crearProveedor,
    actualizarProveedor,
    eliminarProveedor,
} 
from '../../controllers/proveedores/proveedoresController.js';

const ProveedoresRouter = Router()


ProveedoresRouter.get('/', listarTodosProveedores);
ProveedoresRouter.get('/:id', listarProveedoresPorId);
ProveedoresRouter.post('/', crearProveedor);
ProveedoresRouter.put('/:id', actualizarProveedor);
ProveedoresRouter.delete('/:id', eliminarProveedor);

export default ProveedoresRouter;