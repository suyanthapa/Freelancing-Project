-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2024 at 05:14 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_freelance`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` bigint(20) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `username`, `password`) VALUES
(23514683780076853, '', '', 'ewf', '0'),
(62993177514659, '', '', 'suyan123', '0'),
(56581628967993592, 'dwwdwd', 'effwe', 'wrg', '0'),
(62475435, 'wgrwr', 'ewefe', 'test1111', '0'),
(53187900924739747, 'Prajal', 'Gurung', 'prajal123', '0'),
(57538123, 'qsqd', 'ece', 'asdf123', '0'),
(9223372036854775807, 'sir', 'sir11', 'sir', '0'),
(730931933, 'Suyan', 'ttest123', 'suyan123', '0'),
(87145, 'wwwww', 'fvrvvrf', 'asd', '$2y$10$2ZfNCwIqsOpZLPPQJxfEsu4cjIyKyzkpe719LESUCmcQ5owwfbyHW'),
(5573739594112002, 'wdw', 'ee', 'qqq', '$2y$10$5K7jW1gSC7mNNibZSpxxx.YN5sGmqA2BILQXWzEcVbnsTU/hts0vm'),
(3002035762052254515, 'Gaurav', 'Ghimire', 'gg', '$2y$10$NisAXqOzwPzasSe13NcC2.B8y49J4Duubp50E6WS85lOfs8Zn8E3a'),
(51670048522, 'gg', 'gg', 'gg', '$2y$10$vrwaUDrIWO4/fA6hxAb8y.cGJE9QtO/aD8g6YO0HRa9c6twZPkmgu'),
(462328149497481879, 'wfefeefef', 'qefef', 'qq', '$2y$10$a.6HiRO4et2MNmtxvbdl0uB4RpzivwoNJLZYNZZiMkyByVrDZIG4a'),
(392587, 'efkjbf', 'BJEKBEFF', 'aa', '$2y$10$QoiWS4/sBy0TbjTUUV7QZ.o9u7s7GLBHcHOuSGVSuJKu.2oFVndOS'),
(162595928091, 'gg', 'bb', 'aa', '$2y$10$jSkdEKBz1Q/duaQNqZ8LAunXTb8G50usC2upiD4X69peIfVqHz86.'),
(26512389820, 'acjd', 'kbdjkd', 'qwer1', '$2y$10$eFOo1W7o/eMrzKGz8muqme1PQKiw8ejOeMsIeUDmieP6Ux06E/tRK'),
(33673, 'wfewe', 'wefewf', 'suyan', '$2y$10$yS7/cmneLq2ysZBKI/cSzuTuz7TM3RkceqSBVpbJdx2ikyj/L10ga'),
(415770596675242425, '2', 'f', 'f', '$2y$10$n0iy64xgN8Tu8ke2q0SU5uwtoRbBEomgmlnr1fnBzw1EHhex1qfNu'),
(273953748517523, 'ew', 'r', 'w', '$2y$10$O58l6xz69RIL6fx3uJMLdu.jGQXndD77gGdtFILSRKqmqP6e2NTGy'),
(2408576973, 'test11', 'test11', 'pop', '$2y$10$uMoNDavdUb3MEWIdSUQKxuaLxZ2UPDdJlQonZVDZbVINzYCTI/3Ym'),
(9223372036854775807, 'final', 'check', 'check', '$2y$10$2JDSF9c8.IEqyvpIYClUd.w.dgVYKKKbyHqp9fA05mNayGPkakDZS'),
(42296, 'try', 'again', 'user', '$2y$10$ClAqvtu7u1UmJouvBgyGjOTfeIRi4sr8Cc4Pm1L.cyIJJItrU2AVy'),
(566435, 'last', 'last', 'last', '$2y$10$UjtcEtrcLWKQeLZU9uQeAOSIWwueWv5mLaRc6SSmvRyrA5oXt1SRi'),
(786386, 'w', 'w', 'checklogin', '$2y$10$18CKqYDFaCLcQ2PyxMhXSed7ScnnJn473OoCfyKMrFXacZx0el1GS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD KEY `first_name` (`first_name`),
  ADD KEY `username` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
