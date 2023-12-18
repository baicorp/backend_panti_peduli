-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 13 Des 2023 pada 10.55
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `peduli_panti`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `article`
--

-- INSERT INTO `article` (`id`, `title`, `author`, `description`, `content`, `image`, `createdAt`, `updatedAt`) VALUES
-- (15, 'Menyayangi Anak Yatim', 'Dimas Prayoga', 'Menyayangi Anak Yatim: Sebuah Tindakan Manusia yang Mulia', 'Kehadiran anak yatim dalam masyarakat adalah sebuah tantangan bagi kita semua untuk menunjukkan kepedulian dan kasih sayang. Anak-anak ini telah kehilangan salah satu atau kedua orang tua mereka dan memerlukan perhatian ekstra serta kehangatan dari lingkungan sekitarnya. Menyayangi anak yatim bukan hanya suatu kewajiban, tetapi juga merupakan ajaran moral yang sangat dihargai dalam setiap agama dan kemanusiaan.', '1702424634345-Screenshot_2023-12-09-22-23-24-685_com.EmasDigi.jpg', '2023-12-13 06:43:54', '2023-12-13 06:43:54');

-- --------------------------------------------------------

--
-- Struktur dari tabel `profile`
--

CREATE TABLE `profile` (
  `id` int(11) NOT NULL,
  `nama_panti` varchar(255) DEFAULT NULL,
  `notelp_panti` varchar(255) DEFAULT NULL,
  `nama_pengurus` varchar(255) DEFAULT NULL,
  `nama_pemilik` varchar(255) DEFAULT NULL,
  `notelp_pemilik` varchar(255) DEFAULT NULL,
  `deskripsi_panti` varchar(255) DEFAULT NULL,
  `alamat_panti` varchar(255) DEFAULT NULL,
  `provinsi` varchar(255) DEFAULT NULL,
  `kabupaten` varchar(255) DEFAULT NULL,
  `kecamatan` varchar(255) DEFAULT NULL,
  `program_panti` varchar(255) DEFAULT NULL,
  `deskripsi_program` varchar(255) DEFAULT NULL,
  `kebutuhan_panti` varchar(255) DEFAULT NULL,
  `deskripsi_kebutuhan` varchar(255) DEFAULT NULL,
  `jumlah_pengurus` varchar(255) DEFAULT NULL,
  `jumlah_anaklaki` varchar(255) DEFAULT NULL,
  `jumlah_anakpr` varchar(255) DEFAULT NULL,
  `jumlah_anak` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `profile`
--

-- INSERT INTO `profile` (`id`, `nama_panti`, `notelp_panti`, `nama_pengurus`, `nama_pemilik`, `notelp_pemilik`, `deskripsi_panti`, `alamat_panti`, `provinsi`, `kabupaten`, `kecamatan`, `program_panti`, `deskripsi_program`, `kebutuhan_panti`, `deskripsi_kebutuhan`, `jumlah_pengurus`, `jumlah_anaklaki`, `jumlah_anakpr`, `jumlah_anak`, `image`, `createdAt`, `updatedAt`) VALUES
-- (1, 'nana', '0819229', 'nanana', 'kakaka', '08288281', 'kakaskasjdkaashahs', 'lengkong', 'jawabrat', 'kuningan', 'garawangi', 'kswkskasaodsancckcocnkcno', 'kaoskjqownnxbga', 'butuh relawna', 'kaksksk hd', '10', '5', '5', '10', '1702314630833_61cc54bb0d827.jpg', '2023-12-11 17:10:30', '2023-12-11 17:10:30'),
-- (2, 'graha yatim duafa', '08123456789 ', 'asep', 'usep', '08976865432', 'yayasan', 'kuningan', 'jawa barat', 'kuningan', 'kuningan ', 'program yayasan', 'program program murojaah', 'butuh al-quran', 'membutuhkan al-quran', '5', '5 ', '5', '10', '1702334099442_8dcdcd8e6a315c26bb93a78edda9ac63_trash-talk-cover.jpg', '2023-12-11 22:34:59', '2023-12-11 22:34:59');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

CREATE TABLE users (
  id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(255) NOT NULL
);

ALTER TABLE article
  ADD COLUMN user_id VARCHAR(255) NOT NULL,
  ADD CONSTRAINT fk_article_user_id FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE profile
  ADD COLUMN user_id VARCHAR(255) NOT NULL,
  ADD CONSTRAINT fk_profile_user_id FOREIGN KEY (user_id) REFERENCES users (id);


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
