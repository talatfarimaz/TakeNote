-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: takenote
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `category` varchar(200) NOT NULL,
  `create_date` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Tevhid','2021-12-09 22:32:16.640000'),(2,'Namaz','2021-12-09 22:40:26.138000'),(3,'İnsan','2021-12-13 23:01:42.166000'),(4,'Hayat','2021-12-13 23:01:50.977000'),(5,'Mevt-Ölüm','2021-12-13 23:02:02.586000'),(6,'Nefis','2021-12-13 23:02:13.051000'),(7,'Günah','2021-12-13 23:02:22.218000'),(8,'Gençlik','2021-12-13 23:02:31.509000'),(9,'İhlas','2021-12-13 23:02:39.404000'),(10,'Dua','2021-12-13 23:02:46.627000'),(11,'Âhiret-Hâşir','2021-12-13 23:03:51.590000'),(12,'Kabir','2021-12-13 23:04:01.836000'),(13,'İktisad-Kanaat','2021-12-13 23:04:18.799000'),(14,'Hamd-Şükür','2021-12-13 23:04:30.143000'),(15,'Sünnet-i Seniyye','2021-12-13 23:04:44.322000'),(16,'Ömür','2021-12-13 23:04:53.378000'),(17,'Takva','2021-12-13 23:05:03.042000'),(18,'Gurur-Enaniyet','2021-12-13 23:05:23.300000'),(19,'Musibet','2021-12-13 23:05:33.768000'),(20,'Gıybet','2021-12-13 23:05:43.231000'),(21,'Gaflet','2021-12-13 23:05:52.693000'),(22,'Nübüvvet-Risalet','2021-12-13 23:06:08.350000'),(23,'Vesvese','2021-12-13 23:06:18.464000'),(24,'Merak','2021-12-13 23:06:26.638000'),(25,'Hırs','2021-12-13 23:06:34.987000'),(26,'Adalet','2021-12-13 23:06:44.397000'),(27,'Hastalık','2021-12-13 23:06:53.568000'),(28,'Sabır','2021-12-13 23:07:03.256000'),(29,'Uhuvvet','2021-12-13 23:07:12.416000'),(30,'Tesanüd','2021-12-13 23:07:22.267000'),(31,'Hürriyet','2021-12-13 23:07:32.518000'),(32,'Kaideler','2021-12-13 23:07:42.600000'),(33,'Kur\'an','2021-12-13 23:07:52.530000'),(34,'Riya','2021-12-13 23:08:00.587000'),(35,'İlim','2021-12-13 23:08:11.604000'),(36,'Şöhret','2021-12-13 23:08:19.968000'),(37,'Muhabbet','2021-12-13 23:08:28.749000'),(38,'İbadet','2021-12-13 23:08:36.947000'),(39,'Cennet-Cehennem','2021-12-13 23:08:49.146000'),(40,'Hased','2021-12-13 23:08:58.526000'),(41,'Ruh','2021-12-13 23:09:08.519000'),(42,'Tevekkül','2021-12-13 23:09:17.849000'),(43,'Riba-Faiz','2021-12-13 23:09:28.568000'),(44,'Kader','2021-12-13 23:09:36.322000'),(45,'Kalb','2021-12-13 23:09:44.105000'),(46,'Tebrik Mesajları','2021-12-13 23:09:55.853000'),(47,'Melaike','2021-12-13 23:10:05.913000'),(48,'İman','2021-12-13 23:10:12.761000'),(49,'İslâmiyet','2021-12-13 23:10:33.664000'),(50,'Yaratılış Gayesi','2021-12-13 23:10:46.699000'),(51,'Sikke-i Tasdik-i Gaybi','2021-12-13 23:25:53.654000'),(52,'Muhâkemât','2021-12-13 23:26:11.675000');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-13 23:35:52