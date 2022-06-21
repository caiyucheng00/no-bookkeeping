/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 8.0.26 : Database - no_bookkeeping
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`no_bookkeeping` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `no_bookkeeping`;

/*Table structure for table `account` */

DROP TABLE IF EXISTS `account`;

CREATE TABLE `account` (
  `account_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `account_name` varchar(20) NOT NULL,
  PRIMARY KEY (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `account` */

insert  into `account`(`account_id`,`user_id`,`account_name`) values (1,1,'天坑自救记账本'),(4,1,'test'),(5,2,'学习'),(6,2,'娱乐');

/*Table structure for table `record` */

DROP TABLE IF EXISTS `record`;

CREATE TABLE `record` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `account_id` int NOT NULL,
  `in_out` int NOT NULL,
  `spend_type` int NOT NULL,
  `date` datetime NOT NULL,
  `money` double NOT NULL,
  `note` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`record_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `record` */

insert  into `record`(`record_id`,`account_id`,`in_out`,`spend_type`,`date`,`money`,`note`) values (1,1,1,1,'2022-06-19 16:27:44',100,NULL),(4,4,1,1,'2022-06-22 14:07:26',23,NULL),(12,4,1,2,'2022-06-10 21:29:00',63,'吃饭'),(13,1,1,1,'2022-06-21 22:05:00',9,'出行'),(16,5,1,7,'2022-06-21 22:20:00',100,'买书'),(17,1,1,2,'2022-06-01 00:22:00',39,'吃饭'),(18,1,1,1,'2022-06-13 00:24:00',2.5,'地铁'),(19,1,1,3,'2022-06-11 22:23:00',428,'买衣服'),(20,1,1,5,'2022-06-13 20:23:00',100,'电玩城'),(21,1,1,7,'2022-06-12 18:23:00',99,'买书'),(22,1,1,8,'2022-06-08 00:27:00',58,'买药');

/*Table structure for table `spend_type` */

DROP TABLE IF EXISTS `spend_type`;

CREATE TABLE `spend_type` (
  `type_id` int NOT NULL AUTO_INCREMENT,
  `type_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `spend_type` */

insert  into `spend_type`(`type_id`,`type_name`) values (1,'交通费用'),(2,'餐饮'),(3,'购物'),(4,'日用品'),(5,'休闲娱乐'),(6,'住房'),(7,'教育'),(8,'医疗'),(9,'其他');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `user_password` varchar(20) NOT NULL,
  `user_email` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `user` */

insert  into `user`(`user_id`,`user_name`,`user_password`,`user_email`) values (1,'root','root',NULL),(2,'liusiyuan','lsy123',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
