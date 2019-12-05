function tugas4() {
  var andi = 150;
  var dika = 160;
  var andriana = 170;

  if (andriana > dika) {
    if (andriana > andi) {
      console.log("Andriana adalah siswa yang memiliki tinggi badan tertinggi" + " = " + "170cm");
    } else {
      console.log("Andriana adalah siswa yang memiliki tinggi badan tertinggi kedua");
    }
  } else {
    console.log("Andriana adalah siswa yang memiliki tinggi badan terpendek");
  }

  if (dika > andi) {
    console.log("Dika adalah siswa yang memiliki tinggi badan tertinggi kedua" + " = " + "160cm");
  } else {
    console.log("Dika adalah siswa yang memiliki tinggi badan terpendek");
  }

  if (andi < andriana) {
    if (andi < dika) {
      console.log("Andi adalah siswa yang memiliki tinggi badan terpendek" + " = " + "150cm");
    } else {
      console.log("Andi adalah siswa yang memiliki tinggi badan terpendek kedua");
    }
  } else {
    console.log("Andi adalah siswa yang memiliki tinggi badan tertinggi");
  }
}

tugas4()