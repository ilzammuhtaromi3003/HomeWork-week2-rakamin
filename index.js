// Membuat array dengan 100 nilai random antara 1 sampai 50
const array = [];
for (let i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * 50) + 1);
}

// Membuat dua array, satu untuk index genap dan satu untuk index ganjil
const arrayGenap = [];
const arrayGanjil = [];
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        arrayGenap.push(array[i]);
    } else {
        arrayGanjil.push(array[i]);
    }
}

// Menghitung min, max, total, dan rata-rata untuk array genap
let minGenap = arrayGenap[0];
let maxGenap = arrayGenap[0];
let totalGenap = 0;
for (let i = 0; i < arrayGenap.length; i++) {
    if (arrayGenap[i] < minGenap) {
        minGenap = arrayGenap[i];
    }
    if (arrayGenap[i] > maxGenap) {
        maxGenap = arrayGenap[i];
    }
    totalGenap += arrayGenap[i];
}
const rataRataGenap = totalGenap / arrayGenap.length;

// Menghitung min, max, total, dan rata-rata untuk array ganjil
let minGanjil = arrayGanjil[0];
let maxGanjil = arrayGanjil[0];
let totalGanjil = 0;
for (let i = 0; i < arrayGanjil.length; i++) {
    if (arrayGanjil[i] < minGanjil) {
        minGanjil = arrayGanjil[i];
    }
    if (arrayGanjil[i] > maxGanjil) {
        maxGanjil = arrayGanjil[i];
    }
    totalGanjil += arrayGanjil[i];
}
const rataRataGanjil = totalGanjil / arrayGanjil.length;

// Menampilkan hasil
console.log("Array dengan jumlah index 100:", array);
console.log("Array genap dengan jumlah index 50:", arrayGenap);
console.log("Array ganjil dengan jumlah index 50:", arrayGanjil);
console.log("Min pada array genap:", minGenap);
console.log("Max pada array genap:", maxGenap);
console.log("Total pada array genap:", totalGenap);
console.log("Rata-rata pada array genap:", rataRataGenap);
console.log("Min pada array ganjil:", minGanjil);
console.log("Max pada array ganjil:", maxGanjil);
console.log("Total pada array ganjil:", totalGanjil);
console.log("Rata-rata pada array ganjil:", rataRataGanjil);

// Membandingkan nilai min, max, total, dan rata-rata
if (minGenap > minGanjil) {
    console.log("Min lebih besar pada array genap");
} else if (minGenap < minGanjil) {
    console.log("Min lebih besar pada array ganjil");
} else {
    console.log("Min memiliki nilai sama pada array genap dan ganjil");
}

if (maxGenap > maxGanjil) {
    console.log("Max lebih besar pada array genap");
} else if (maxGenap < maxGanjil) {
    console.log("Max lebih besar pada array ganjil");
} else {
    console.log("Max memiliki nilai sama pada array genap dan ganjil");
}

if (totalGenap > totalGanjil) {
    console.log("Total lebih besar pada array genap");
} else if (totalGenap < totalGanjil) {
    console.log("Total lebih besar pada array ganjil");
} else {
    console.log("Total memiliki nilai sama pada array genap dan ganjil");
}

if (rataRataGenap > rataRataGanjil) {
    console.log("Rata-rata lebih besar pada array genap");
} else if (rataRataGenap < rataRataGanjil) {
    console.log("Rata-rata lebih besar pada array ganjil");
} else {
    console.log("Rata-rata memiliki nilai sama pada array genap dan ganjil");
}
