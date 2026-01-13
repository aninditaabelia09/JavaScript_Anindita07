// jadi ini adalah komen, jadi bebas aja 

// 1. variabel dengan let
let nama = "Yang Jungwon";

// tampilkan data
console.log(nama);

// kita ubah nilai variabel nama
nama = "Park Sunghoon";
console.log(nama);

// 2. variabel dengan var
var namaDepan = "Yang";
console.log(namaDepan);
namaDepan = "Park";
console.log(namaDepan);

// kelakuan dari ver
let namaBelakang = "Jungwon";
{
    let namaBelakang = "Sunghoon";
    console.log(namaBelakang);
}
console.log(namaBelakang);

// kelakuan dari var
var namaTengah = "keren";
{
    var namaTengah = "Ganteng"
    console.log(namaTengah);
}
console.log(namaTengah);

// kasus khusus
gorengan = "Bala-bala"
{
    gorengan = "Combro";
}
console.log(gorengan);

// 3. const

const TTL = "10 Maret 2022";
console.log(TTL);
// TTL = "11 Maret 2026"; gak boleh dilakukan karena sudah janji konstan

