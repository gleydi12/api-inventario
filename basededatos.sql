-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         11.3.2-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para inventario
CREATE DATABASE IF NOT EXISTS `inventario` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `inventario`;

-- Volcando estructura para tabla inventario.compras
CREATE TABLE IF NOT EXISTS `compras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `id_proveedor` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_proveedor` (`id_proveedor`),
  CONSTRAINT `FK_compras_proveedores` FOREIGN KEY (`id_proveedor`) REFERENCES `proveedores` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla inventario.compras: ~5 rows (aproximadamente)
DELETE FROM `compras`;
INSERT INTO `compras` (`id`, `fecha`, `id_proveedor`) VALUES
	(1, '2025-03-20', 1),
	(2, '2025-04-23', 4),
	(3, '2025-04-23', 3),
	(4, '2025-04-23', 2),
	(5, NULL, 5);

-- Volcando estructura para tabla inventario.detalles_compra
CREATE TABLE IF NOT EXISTS `detalles_compra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_compra` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precio_unitario` decimal(20,6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_compra` (`id_compra`),
  KEY `id_producto` (`id_producto`),
  CONSTRAINT `FK__compras` FOREIGN KEY (`id_compra`) REFERENCES `compras` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_detalles_compra_productos` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla inventario.detalles_compra: ~5 rows (aproximadamente)
DELETE FROM `detalles_compra`;
INSERT INTO `detalles_compra` (`id`, `id_compra`, `id_producto`, `cantidad`, `precio_unitario`) VALUES
	(1, 1, 1, 4, 45.000000),
	(2, 3, 5, 50, 23.000000),
	(3, 5, 1, 34, 46.000000),
	(4, 2, 2, 23, 23.000000),
	(5, 4, 6, 21, 6.000000);

-- Volcando estructura para tabla inventario.detalles_venta
CREATE TABLE IF NOT EXISTS `detalles_venta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_venta` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precio_unitario` decimal(20,6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_venta` (`id_venta`),
  KEY `id_producto` (`id_producto`),
  CONSTRAINT `FK__ventas` FOREIGN KEY (`id_venta`) REFERENCES `ventas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_detalles_venta_productos` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla inventario.detalles_venta: ~4 rows (aproximadamente)
DELETE FROM `detalles_venta`;
INSERT INTO `detalles_venta` (`id`, `id_venta`, `id_producto`, `cantidad`, `precio_unitario`) VALUES
	(1, 1, 1, 34, 56.000000),
	(2, 2, 2, 2, 25.000000),
	(3, 4, 6, 4, 8.000000),
	(4, 5, 7, 20, 35.000000);

-- Volcando estructura para tabla inventario.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `precio_venta` decimal(20,6) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla inventario.productos: ~7 rows (aproximadamente)
DELETE FROM `productos`;
INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio_venta`, `stock`) VALUES
	(1, 'javon', 'javon de lavar ropa ', 45.000000, 4),
	(2, 'ace', 'lavar', 12.000000, 2),
	(3, 'azucar', 'kintal azucar', 1800.000000, 2),
	(4, 'arroz', 'kintal arroz', 1500.000000, 3),
	(5, 'espaguetii', 'espagueti', 20.000000, 60),
	(6, 'javon rinzo', 'javon de lavar trate', 9.000000, 50),
	(7, 'papel higienico', 'papel higienico de 1000  hojas', 35.000000, 45);

-- Volcando estructura para tabla inventario.proveedores
CREATE TABLE IF NOT EXISTS `proveedores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla inventario.proveedores: ~5 rows (aproximadamente)
DELETE FROM `proveedores`;
INSERT INTO `proveedores` (`id`, `nombre`, `telefono`, `email`) VALUES
	(1, 'juan', '87789800', 'juan@gmail.com'),
	(2, 'carlos', '87456790', 'perezcarlos@gmail.com'),
	(3, 'norma ', '57890987', 'norma123@gmail.com'),
	(4, 'jose', '57234556', 'jose456@gmail.com'),
	(5, 'clara', '87344565', 'clara@gmail.com');

-- Volcando estructura para tabla inventario.ventas
CREATE TABLE IF NOT EXISTS `ventas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla inventario.ventas: ~5 rows (aproximadamente)
DELETE FROM `ventas`;
INSERT INTO `ventas` (`id`, `fecha`) VALUES
	(1, '2025-03-20'),
	(2, '2025-04-23'),
	(3, '2025-04-23'),
	(4, '2025-04-23'),
	(5, '2025-04-23');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
