/* 


AA / 90-100 / 4.0 / Başarılı
BA / 80-89 /3.5 / Başarılı
BB / 75-79 / 3.0 / Başarılı
CB / 70-74 / 2.5 / Başarılı
CC / 60-69 / 2.0 / Başarılı
DC / 50-59 / 1.5 / Koşullu başarılı - başarısız 
DD / 40-49 / 1.0 / Başarısız
FD / 30-39 / 0.5 / Başarısız

*/

let vize = 80;
let final = 80;
let vizeYuzde = 0.4;
let finalYuzde = 0.6;
let ortalama = vize * vizeYuzde + final * finalYuzde;

switch (true) {
  case ortalama >= 90 && ortalama <= 100:
    console.log("Tebrikler geçtiniz, harf notunuz AA");
    break;
  case ortalama >= 80 && ortalama <= 89:
    console.log("Tebrikler geçtiniz, harf notunuz BA");
    break;
  case ortalama >= 75 && ortalama <= 79:
    console.log("Tebrikler geçtiniz, harf notunuz BB");
    break;
  case ortalama >= 70 && ortalama <= 74:
    console.log("Tebrikler geçtiniz, harf notunuz CB");
    break;
  case ortalama >= 60 && ortalama <= 69:
    console.log("Tebrikler geçtiniz, harf notunuz CC");
    break;
  case ortalama >= 50 && ortalama <= 59:
    console.log("Tebrikler koşullu geçtiniz, harf notunuz DC");
    break;
  case ortalama >= 40 && ortalama <= 49:
    console.log("başarısız, harf notunuz DD");
    break;
  case ortalama >= 90 && ortalama <= 100:
    console.log("başarısız, harf notunuz FD");
    break;
  default:
    console.log("girilen değerleri kontrol ediniz");
    break;
}
