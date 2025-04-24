import { Router } from 'express';

import {
    listarTodosProductos,
    listarProductosPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
} from '../../controllers/productos/productosController.js';


const ProductosRouter = Router();


ProductosRouter.get('/', listarTodosProductos);
ProductosRouter.get('/:id', listarProductosPorId);
ProductosRouter.post('/', crearProducto);
ProductosRouter.put('/:id', actualizarProducto);
ProductosRouter.delete('/:id', eliminarProducto);

export default ProductosRouter;