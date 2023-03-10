import sentosa1 from "./assets/images/GOR Sentosa/foto1.jpg"
import sentosa2 from "./assets/images/GOR Sentosa/foto2.jpg"
import sentosa3 from "./assets/images/GOR Sentosa/foto3.jpg"
import sentosa4 from "./assets/images/GOR Sentosa/foto4.jpg"

import sigma1 from "./assets/images/GOR Sigma/foto1.jpg"
import sigma2 from "./assets/images/GOR Sigma/foto2.jpg"
import sigma3 from "./assets/images/GOR Sigma/foto3.jpg"

import msb1 from "./assets/images/GOR MSB/foto1.jpg"
import msb2 from "./assets/images/GOR MSB/foto2.jpg"
import msb3 from "./assets/images/GOR MSB/foto3.jpg"

import bbr1 from "./assets/images/GOR BBR/foto1.jpg"
import bbr2 from "./assets/images/GOR BBR/foto2.jpg"
import bbr3 from "./assets/images/GOR BBR/foto3.jpg"

import wartawan1 from "./assets/images/GOR Wartawan/foto1.jpg"
import wartawan2 from "./assets/images/GOR Wartawan/foto2.jpg"

import cifut1 from "./assets/images/GOR Cifut/foto1.jpg"
import cifut2 from "./assets/images/GOR Cifut/foto2.jpg"
import cifut3 from "./assets/images/GOR Cifut/foto3.jpeg"

import ifi1 from "./assets/images/Futsal IFI/foto1.jpg"
import ifi2 from "./assets/images/Futsal IFI/foto2.jpg"
import ifi3 from "./assets/images/Futsal IFI/foto3.jpg"

import rajawali1 from "./assets/images/Futsal Rajawali/foto1.jpg"
import rajawali2 from "./assets/images/Futsal Rajawali/foto2.jpg"

import bisoc1 from "./assets/images/Futsal Bisoc/foto1.jpg"
import bisoc2 from "./assets/images/Futsal Bisoc/foto2.jpg"
import bisoc3 from "./assets/images/Futsal Bisoc/foto3.jpg"

import zero1 from "./assets/images/Zero Futsal/foto1.jpg"
import zero2 from "./assets/images/Zero Futsal/foto2.jpg"
import zero3 from "./assets/images/Zero Futsal/foto3.jpg"

import imagedefault from "./assets/images/default.jpg"

const data = [
  {
   "no": 1,
   "venue": "GOR Sentosa",
   "alamat": "Jl. Sukabirus No.A2, Citeureup, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257",
   "gmaps": "https://goo.gl/maps/aZMK7mrv5R131Bdv7",
   "no_wa": "08971584123",
   "images": [sentosa1, sentosa2, sentosa3, sentosa4],
   "booking": {
     "onsite": true,
     "wa": false,
    },
   "wajib_dp": true,
   "keterangan": "-",
   "pembayaran":{
     "cash": true,
     "transfer": false,
     "qris": false,
   },
   "scheduling": "manual",
   "sewa":{
     "siang": "-",
     "malam": "-",
     "keterangan": "-",
   },
   "member_perbulan":{
     "siang": "-",
     "malam": "-",
     "keterangan": "bawa kok sendiri",
    },
   "jam_buka": "-",
   "fasilitas":{
     "lap_badminton": 1,
     "lap_futsal": "-",
     "lainnya": "-"
   },
   "tipe": "Bulu Tangkis"
  },
  {
   "no": 2,
   "venue": "GOR Sigma",
   "alamat": "Jl. Cijeruk No.4, Bojongsoang, Kec. Bojongsoang, Kabupaten Bandung, Jawa Barat 40288",
   "gmaps": "https://goo.gl/maps/BHrcwjgJQ5mTYysE8",
   "no_wa": "081322854802",
   "images": [sigma1, sigma2, sigma3],
   "booking": {
     "onsite": true,
     "wa": true,
    },
   "wajib_dp": true,
   "keterangan": "-",
   "pembayaran":{
     "cash": true,
     "transfer": true,
     "qris": false,
   },
   "scheduling": "manual",
   "sewa":{
     "siang": "-",
     "malam": "-",
     "keterangan": "-",
   },
   "member_perbulan":{
     "siang": 250000,
     "malam": 275000,
     "keterangan": "4x main@3jam",
   },
   "jam_buka": "7.00 - 22.00",
   "fasilitas":{
     "lap_badminton": 3,
     "lap_futsal": "-",
     "lainnya": "-"
   },
   "tipe": "Bulu Tangkis"
  },
  {
   "no": 3,
   "venue": "GOR MSB",
   "alamat": "Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40267",
   "gmaps": "https://goo.gl/maps/6e2empALCf4yFzjbA",
   "no_wa": "081320455444",
   "images": [msb1, msb2, msb3],
   "booking": {
     "onsite": true,
     "wa": true,
    },
   "wajib_dp": true,
   "keterangan": "-",
   "pembayaran":{
   "cash": true,
   "transfer": true,
   "qris": true,
   },
   "scheduling": "manual",
   "sewa":{
     "siang": 80000,
     "malam": 80000,
     "keterangan": "-",
   },
   "member_perbulan":{
     "siang": 320000,
     "malam": 320000,
     "keterangan": "4x main@3jam",
   },
   "jam_buka": "8.00 - 22.00",
   "fasilitas":{
     "lap_badminton": 2,
     "lap_futsal": "-",
     "lainnya": "-"
   },
   "tipe": "Bulu Tangkis"
  },
  {
   "no": 4,
   "venue": "GOR BBR (Buah Batu Regency)",
   "alamat": "Komplek Buah Batu Regency, Jl. Terusan Buah Batu No.7A, Kujangsari, Kec. Bandung Kidul, Kota Bandung, Jawa Barat 40287",
   "gmaps": "https://goo.gl/maps/AYD98QRx9AWLtsJz8",
   "no_wa": "087736489112",
   "images": [bbr1, bbr2, bbr3],
   "booking": {
     "onsite": true,
     "wa": false,
    },
   "wajib_dp": true,
   "keterangan": "-",
   "pembayaran":{
   "cash": true,
   "transfer": false,
   "qris": false,
   },
   "scheduling": "manual",
   "sewa":{
     "siang": 75000,
     "malam": 75000,
     "keterangan": "-",
   },
   "member_perbulan":{
     "siang": 300000,
     "malam": 300000,
     "keterangan": "4x main@3jam",
   },
   "jam_buka": "7.00 - 17.00",
   "fasilitas":{
     "lap_badminton": 2,
     "lap_futsal": "-",
     "lainnya": "-"
   },
   "tipe": "Bulu Tangkis"
  },
  {
   "no": 5,
   "venue": "GOR Wartawan",
   "alamat": "Jl. Wartawan 2 No.23, Turangga, Kec. Lengkong, Kota Bandung, Jawa Barat 40264",
   "gmaps": "https://goo.gl/maps/ahbgQJA5msFmemJR7",
   "no_wa": "0895333633777",
   "images": [wartawan1, wartawan2],
   "booking": {
     "onsite": false,
     "wa": true,
    },
   "wajib_dp": true,
   "keterangan": "minimal 20k",
   "pembayaran":{
   "cash": true,
   "transfer": true,
   "qris": false,
   },
   "scheduling": "manual",
   "sewa":{
     "siang": 35000,
     "malam": 35000,
     "keterangan": "-",
   },
   "member_perbulan":{
     "siang": 390000,
     "malam": 390000,
     "keterangan": "4x main@3jam + (1 slop kok)",
   },
   "jam_buka": "7.00 - 23.00",
   "fasilitas":{
     "lap_badminton": 3,
     "lap_futsal": "-",
     "lainnya": "-"
   },
   "tipe": "Bulu Tangkis"
  },
  {
   "no": 6,
   "venue": "GOR Cifut",
   "alamat": "Jl. Cikoneng, RT.03/RW.08, Bojongsoang, Kec. Bojongsoang, Kabupaten Bandung, Jawa Barat 40288",
   "gmaps": "https://goo.gl/maps/HvMi4NUzPHA8Jndk8",
   "no_wa": "083138466956",
   "images": [cifut1, cifut2, cifut3],
   "booking": {
     "onsite": true,
     "wa": true,
    },
   "wajib_dp": true,
   "keterangan": "-",
   "pembayaran":{
   "cash": true,
   "transfer": false,
   "qris": false,
   },
   "scheduling": "manual",
   "sewa":{
     "siang": 60000,
     "malam": 60000,
     "keterangan": "include 2 kok",
   },
   "member_perbulan":{
     "siang": 150000,
     "malam": 150000,
     "keterangan": "4x main@3jam",
   },
   "jam_buka": "8.00 - 00.00",
   "fasilitas":{
     "lap_badminton": 1,
     "lap_futsal": "-",
     "lainnya": "-"
   },
   "tipe": "Bulu Tangkis"
  },
  {
   "no": 7,
   "venue": "Futsal IFI",
   "alamat": "Jl. Sukabirus No.7, Citeureup, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257",
   "gmaps": "https://goo.gl/maps/oAkXc1CNK5uNfEer7",
   "no_wa": "089637510539",
   "images": [ifi1, ifi2, ifi3],
   "booking": {
     "onsite": true,
     "wa": false,
    },
   "wajib_dp": true,
   "keterangan": "-",
   "pembayaran":{
   "cash": true,
   "transfer": false,
   "qris": false,
   },
   "scheduling": "manual",
   "sewa":{
     "siang": 100000,
     "malam": 135000,
     "keterangan": "-",
   },
   "member_perbulan":{
     "siang": "-",
     "malam": "-",
     "keterangan": "-",
   },
   "jam_buka": "8.00 - 00.00",
   "fasilitas":{
     "lap_badminton": "-",
     "lap_futsal": 2,
     "lainnya": "-"
   },
   "tipe": "futsal"
  },
  {
   "no": 8,
   "venue": "Futsal Rajawali",
   "alamat": "Citeureup, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257",
   "gmaps": "https://goo.gl/maps/vpSUfADYEkWhwEL56",
   "no_wa": "tidak pakai wa",
   "images": [rajawali1, rajawali2],
   "booking": {
     "onsite": true,
     "wa": false,
    },
   "wajib_dp": true,
   "keterangan": "-",
   "pembayaran":{
   "cash": true,
   "transfer": false,
   "qris": false,
   },
   "scheduling": "manual",
   "sewa":{
     "siang": "-",
     "malam": "-",
     "keterangan": "-",
   },
   "member_perbulan":{
     "siang": "-",
     "malam": "-",
     "keterangan": "-",
   },
   "jam_buka": "8.00 - 00.00",
   "fasilitas":{
     "lap_badminton": "-",
     "lap_futsal": 3,
     "lainnya": "-"
   },
   "tipe": "futsal"
  },
  {
   "no": 9,
   "venue": "Futsal Bisoc",
   "alamat": "Jl. Batununggal Lestari No.1, Batununggal, Kec. Bandung Kidul, Kota Bandung, Jawa Barat 40266",
   "gmaps": "https://goo.gl/maps/6WDiUdMkmTPK2KL19",
   "no_wa": "089530619149",
   "images": [bisoc1, bisoc2, bisoc3],
   "booking": {
     "onsite": true,
     "wa": true,
    },
   "wajib_dp": true,
   "keterangan": "minimal 50k",
   "pembayaran":{
   "cash": true,
   "transfer": true,
   "qris": false,
   },
   "scheduling": "manual",
   "sewa":{
     "siang": 135000,
     "malam": 150000,
     "keterangan": "-",
   },
   "member_perbulan":{
     "siang": 486000,
     "malam": 540000,
     "keterangan": "4x main (reschedulue jadwal member minimal 1 hari sebelumnya)",
   },
   "jam_buka": "8.00 - 00.00",
   "fasilitas":{
     "lap_badminton": "-",
     "lap_futsal": 2,
     "lainnya": "sewa sepatu 10k"
   },
   "tipe": "futsal"
  },
  {
   "no": 10,
   "venue": "Zero Futsal",
   "alamat": "Jl. Terusan Rancagoong No.13, Gumuruh, Kec. Batununggal, Kota Bandung, Jawa Barat 40275",
   "gmaps": "https://goo.gl/maps/uFbtCidwnMukfRk28",
   "no_wa": "08112292376",
   "images": [zero1, zero2, zero3],
   "booking": {
     "onsite": true,
     "wa": true,
    },
   "wajib_dp": true,
   "keterangan": "minimal 50k",
   "pembayaran":{
   "cash": true,
   "transfer": true,
   "qris": false,
   },
   "scheduling": "manual",
   "sewa":{
     "siang": 100000,
     "malam": 120000,
     "keterangan": "-",
   },
   "member_perbulan":{
     "siang": 400000,
     "malam": 480000,
     "keterangan": "4x main (reschedulue jadwal member minimal 1 hari sebelumnya)",
   },
   "jam_buka": "8.00 - 00.00",
   "fasilitas":{
     "lap_badminton": "-",
     "lap_futsal": 1,
     "lainnya": "-"
   },
   "tipe": "futsal"
  },
  {
   "no": 11,
   "venue": "Futsal Cifut",
   "alamat": "Jl. Cikoneng, RT.03/RW.08, Bojongsoang, Kec. Bojongsoang, Kabupaten Bandung, Jawa Barat 40288",
   "gmaps": "https://goo.gl/maps/HvMi4NUzPHA8Jndk8",
   "no_wa": "083138466956",
   "images": [imagedefault],
   "booking": {
     "onsite": true,
     "wa": true,
    },
   "wajib_dp": true,
   "keterangan": "-",
   "pembayaran":{
   "cash": true,
   "transfer": false,
   "qris": false,
   },
   "scheduling": "manual",
   "sewa":{
     "siang": 120000,
     "malam": 150000,
     "keterangan": "-",
   },
   "member_perbulan":{
     "siang": 480000,
     "malam": 480000,
     "keterangan": "4x main",
   },
   "jam_buka": "8.00 - 00.00",
   "fasilitas":{
     "lap_badminton": "-",
     "lap_futsal": 1,
     "lainnya": "-"
   },
   "tipe": "futsal"
  }
 ]

export default data;