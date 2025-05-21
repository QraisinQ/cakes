CREATE DATABASE  IF NOT EXISTS `g00472936` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `g00472936`;
-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: g00472936
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cakes`
--

DROP TABLE IF EXISTS `cakes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cakes` (
  `product_id` int NOT NULL,
  `product` varchar(50) NOT NULL,
  `manufacturer` varchar(50) NOT NULL,
  `short_description` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `image` varchar(50) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cakes`
--

LOCK TABLES `cakes` WRITE;
/*!40000 ALTER TABLE `cakes` DISABLE KEYS */;
INSERT INTO `cakes` VALUES (1,'Banana Cake','O\'Hehirs','Moist and fluffy banana cake, rich in natural sweetness, perfect for breakfast or dessert.',15,'Banana_Cake.jpeg'),(2,'Tiramisu','O\'Hehirs','Classic Italian dessert layered with mascarpone, espresso-soaked ladyfingers, and a dusting of cocoa.',19,'Tiramisu.jpeg'),(3,'Napoleon','O\'Hehirs','Crispy puff pastry layered with rich vanilla custard, a timeless French pastry indulgence.',22,'Napoleon.jpeg'),(4,'Elegant Red Velver Cake','O\'Hehirs','Lusciously smooth red velvet layers with cream cheese frosting, ideal for celebrations.',18,'Elegant_Red_Velvet_Cake.jpeg'),(5,'Classic Vanila Cake','O\'Hehirs','Soft and buttery vanilla cake with light frosting—perfectly simple and always satisfying.',15,'Classic_Vanila_Cake.jpeg'),(6,'Delicious Cake For Every Occasion','O\'Hehirs','A versatile, flavorful cake crafted to suit birthdays, weddings, or everyday joy.',16,'Delicious_Cake_For_Every_Occasion.jpeg'),(7,'Carrot Cake','O\'Hehirs','Deliciously moist Carrot Cake topped with creamy frosting',17,'Carrot_Cake.jpeg'),(8,'Cheesecake','O\'Hehirs','Creamy and delicious cheesecake for every occasion.',22,'Cheesecake.jpeg'),(9,'Fruit Cake','O\'Hehirs','A delicious blend of dried fruits and nuts in a moist sponge cake.',18,'Fruit_Cake.jpeg'),(10,'Butter Cake','O\'Hehirs','A rich and moist classic cake, perfect for any celebration.',20,'Butter_Cake.jpeg'),(11,'Coffee Cake','O\'Hehirs','A moist and flavorful cake infused with rich coffee goodness.',20,'Coffee_Cake.jpeg'),(12,'Lemon Cake','O\'Hehirs','A perfect blend of zesty lemon flavor and moist cake that will tantalize your taste buds',16,'Lemon_Cake.jpeg');
/*!40000 ALTER TABLE `cakes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'user@123.com','pass'),(2,'hs1985irin@gmail.com','12345');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-21 14:59:46
