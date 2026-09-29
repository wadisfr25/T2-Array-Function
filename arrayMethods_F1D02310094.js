const hobiPribadi = [
    { nama: "Membaca Novel", jamPerMinggu: 6, outdoor: false, kategori: "Edukasi" },
    { nama: "Bersepeda", jamPerMinggu: 4, outdoor: true, kategori: "Olahraga" },
    { nama: "Memasak", jamPerMinggu: 5, outdoor: false, kategori: "Kreatif" },
    { nama: "Fotografi", jamPerMinggu: 3, outdoor: true, kategori: "Kreatif" },
    { nama: "Bermain Gitar", jamPerMinggu: 7, outdoor: false, kategori: "Seni" },
    { nama: "Berkebun", jamPerMinggu: 4, outdoor: true, kategori: "Relaksasi" },
    { nama: "Menonton Film", jamPerMinggu: 8, outdoor: false, kategori: "Hiburan" },
    { nama: "Lari Pagi", jamPerMinggu: 3, outdoor: true, kategori: "Olahraga" },
    { nama: "Desain Digital", jamPerMinggu: 9, outdoor: false, kategori: "Kreatif" },
    { nama: "Memancing", jamPerMinggu: 5, outdoor: true, kategori: "Relaksasi" }
];

console.log("=== DATA HOBI PRIBADI ===");
console.table(hobiPribadi);

// 1. map() - membuat ringkasan setiap hobi tanpa mengubah data asli.
const ringkasanHobi = hobiPribadi.map((hobi) =>
    hobi.nama + ": " + hobi.jamPerMinggu + " jam/minggu"
);
console.log("\n1. HASIL map() - Ringkasan waktu setiap hobi:");
console.log(ringkasanHobi);

// 2. filter() - mengambil hobi luar ruangan dengan waktu minimal 4 jam/minggu.
const hobiOutdoorRutin = hobiPribadi.filter(
    (hobi) => hobi.outdoor && hobi.jamPerMinggu >= 4
);
console.log("\n2. HASIL filter() - Hobi outdoor minimal 4 jam/minggu:");
console.table(hobiOutdoorRutin);

// 3. reduce() - menghitung total waktu seluruh hobi dalam satu minggu.
const totalJamHobi = hobiPribadi.reduce(
    (total, hobi) => total + hobi.jamPerMinggu,
    0
);
console.log("\n3. HASIL reduce() - Total waktu semua hobi:");
console.log(`${totalJamHobi} jam/minggu`);

// 4. find() - mencari satu hobi tertentu berdasarkan nama.
const hobiFotografi = hobiPribadi.find((hobi) => hobi.nama === "Fotografi");
console.log("\n4. HASIL find() - Hobi bernama Fotografi:");
console.log(hobiFotografi);

// 5. some() - mengecek apakah ada hobi yang dilakukan 8 jam atau lebih/minggu.
const adaHobiIntensif = hobiPribadi.some((hobi) => hobi.jamPerMinggu >= 8);
console.log("\n5. HASIL some() - Ada hobi minimal 8 jam/minggu?");
console.log(adaHobiIntensif);

// 6. every() - mengecek apakah setiap hobi memiliki nama minimal 5 karakter.
const semuaNamaMinimalLimaKarakter = hobiPribadi.every(
    (hobi) => hobi.nama.length >= 5
);
console.log("\n6. HASIL every() - Semua nama hobi minimal 5 karakter?");
console.log(semuaNamaMinimalLimaKarakter);
