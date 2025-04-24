//Crear la instancia de express
import express from 'express';
import cors from 'cors'

// Importar las rutas
import ProductosRouter from './routes/productos/productosRoutes.js';
import ProveedoresRouter from './routes/proveedores/proveedoresRoutes.js';
import comprasRouter from './routes/compras/comprasRoutes.js';
import VentasRouter from './routes/ventas/ventasRoutes.js';
import detalles_compraRouter from './routes/ventas/ventasRoutes.js';
import detalles_ventaRouter from './routes/detalles_venta/detalles_ventaRoutes.js';

//Crear la app de express
const app = express();

//Habilitar la captura de datos mediante post / formularios
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Habilitar CORS para permitir las llamadas de otro servidor
// distinto a este (localhost:3001).
app.use(cors())

//Configurar el puerto
const port = 3001;

//Usar las rutas
app.use('/productos', ProductosRouter); // productos
app.use('/proveedores', ProveedoresRouter); // proveedores
app.use('/compras', comprasRouter); // compras
app.use('/ventas', VentasRouter); // ventas
app.use('/detalles_compra', detalles_compraRouter); // detalles_compra
app.use('/detalles_venta', detalles_ventaRouter); // detalles_compra


//Levantar el servidor en el puerto 3001
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

