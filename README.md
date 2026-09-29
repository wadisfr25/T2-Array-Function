# Tugas 2 - Array Function

## Identitas

- Nama : **Wadis Freandly**
- NIM  : **F1D02310094**

## Deskripsi Tugas

Tugas ini menerapkan enam metode penting pada Array JavaScript, yaitu `map()`, `filter()`, `reduce()`, `find()`, `some()`, dan `every()`. Data yang digunakan berupa sepuluh objek hobi pribadi. Setiap objek mempunyai nama hobi, jumlah jam per minggu, status kegiatan luar ruangan, dan kategori hobi.

## Cara Menjalankan

```bash
node arrayMethods_F1D02310094.js
```

## Implementasi

### map()

- Tujuan: membuat ringkasan teks berisi nama dan jumlah jam untuk setiap hobi.
- Screenshot kode:

  ![Screenshot kode map()](screenshot/01-map-kode.png)

- Screenshot hasil eksekusi:

  ![Screenshot hasil map()](screenshot/01-map-hasil.png)

### filter()

- Tujuan: mengambil hobi luar ruangan yang dilakukan minimal empat jam per minggu.
- Screenshot kode:

  ![Screenshot kode filter()](screenshot/02-filter-kode.png)

- Screenshot hasil eksekusi:

  ![Screenshot hasil filter()](screenshot/02-filter-hasil.png)

### reduce()

- Tujuan: menjumlahkan seluruh `jamPerMinggu` dari semua hobi.
- Screenshot kode:

  ![Screenshot kode reduce()](screenshot/03-reduce-kode.png)

- Screenshot hasil eksekusi:

  ![Screenshot hasil reduce()](screenshot/03-reduce-hasil.png)

### find()

- Tujuan: menemukan objek hobi dengan nama `Fotografi`.
- Screenshot kode:

  ![Screenshot kode find()](screenshot/04-find-kode.png)

- Screenshot hasil eksekusi:

  ![Screenshot hasil find()](screenshot/04-find-hasil.png)

### some()

- Tujuan: memeriksa apakah ada hobi yang dilakukan minimal delapan jam per minggu.
- Screenshot kode:

  ![Screenshot kode some()](screenshot/05-some-kode.png)

- Screenshot hasil eksekusi:

  ![Screenshot hasil some()](screenshot/05-some-hasil.png)

### every()

- Tujuan: memeriksa apakah seluruh nama hobi memiliki minimal lima karakter.
- Screenshot kode:

  ![Screenshot kode every()](screenshot/06-every-kode.png)

- Screenshot hasil eksekusi:

  ![Screenshot hasil every()](screenshot/06-every-hasil.png)

## Kesimpulan

`map()` dipakai untuk mengubah setiap elemen menjadi bentuk baru, sedangkan `filter()` memilih elemen yang memenuhi syarat. `reduce()` menggabungkan seluruh elemen menjadi satu nilai. Untuk pencarian, `find()` mengambil elemen pertama yang sesuai. `some()` bernilai `true` jika minimal satu elemen sesuai kondisi, sementara `every()` hanya bernilai `true` bila semua elemen memenuhi kondisi.
