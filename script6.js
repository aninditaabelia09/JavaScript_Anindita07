let dataString = "data string";
console.log(dataString);

// 1. escaping string
let data1 = 'Jungwon berkata "stowbery with coklatt"';
console.log(data1);
let data2 = 'Sunghoon "hawai you im pine thankyou"';
console.log(data2);
let data3 = "Jungwon berjalan-jalan di GDA, \wahh ada bangchan";
console.log(data3);

// 2. literal string (template literal string)
let namaDepan = "Park";
let namaBelakang = "Sunghoon";
let umur = 23;
let namaLengkap = umur + " " + namaDepan + " " + namaBelakang;
console.log(namaLengkap);

//lebih elehan supaya ini tidak bikin error
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);