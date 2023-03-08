
function low(low){
    low.sort(function(a,b){
        return a - b;
    })
    return low;
}
var myArray = [2,1,4,6,7,8,10];
console.log(low(myArray));


function tinggi(tinggi){
    tinggi.sort(function(a,b){
        return b - a;
    });
    return tinggi;
}
var myArray = [2,1,4,6,7,8,10];
console.log(tinggi(myArray))

function gabung(gabug){
    console.log();
}



sortTinggi = tinggi(myArray);
console.log(sortTinggi);









console.log("Welcome to Programiz!");


var myArray = [2,9,1,3,4,7,10,6]

console.log("urutkan dari besar ke kecil", besarKeKecil(myArray).toString())
console.log("urutkan dari kecil ke besar", kecilKeBesar(myArray).toString())
console.log("rata rata untuk array tersebut adalah", cariRataRata(myArray))



function besarKeKecil(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function kecilKeBesar(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function cariRataRata(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
let average = sum / arr.length;
return average;
}

//----------------------------no 2------------------------------>>>>
console.log("pembatas halal dan haram ================>>>>");

function joinWords(words) {
    if (words.length === 0) {
return "";
    }
    if (words.length === 1) {
return words[0];
    }
    const lastWord = words.pop();
    return words.join(", ") + " dan " + lastWord;
}

const words = ["dewi persik", "luna maya", "cut tari"];
const result = joinWords(words);
console.log(result);

//==========================================no 4====================================================>>>
 function arrNumbers(arrNum1,arrNum2){
    let hasilArr = arrNum1.map((value,index) => value + arrNum2[index]);

    console.log(`${arrNum1} di tambah ${arrNum2}`);
    console.log(hasilArr);
 }
 arrNumbers([4,5,6,7,8],[8,7,6,5,4]);

 //===========================================no 5==================================================>>>

 let almas = ["almas","nabila","nova",];

 function tambahkata(addArr){
    console.log(`array awal adalah ${almas}`);
    console.log(`word yang di tambah  adalah ${addArr}`);

    if(almas.includes(addArr)){
        console.log("hasilnya adalah Dennied");
    }else{
        console.log("hasilnya adalah succes");
        almas.push(addArr);
    }
    console.log(almas);
 }
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==");

 class Murid{
  constructor(nama,email,age,score){
    this.nama = nama;
    this.email = email;
    this.age = age;
    this.score = score
  }
  }
murid1 = new Murid("daffan","daffan@gmail.com",25,30);
murid2 = new Murid("hago","hago@gmail.com",23,30);
murid3 = new Murid("baba","baba@gmail.com",28,50);
murid4 = new Murid("dea","dea@gmail.com",35,67);


let muridUmur = [
  murid1.umur,
  murid2.umur,
];
let muridScore = [
  murid1.score,
  murid2.score
];

hasil = {
  hasilUmur : {
    muridUmurMax : Math.max(...muridUmur),
    muridUmurMin : Math.min(...muridUmur),
    muridUmurAvg : muridUmur.reduce((a,b) => a + b) / muridUmur.length,
  },
  hasilScore : {
    muridScoreMax : Math.max(...muridScore),
    muridScoreMin : Math.min(...muridScore),
    muridScoreAvg : muridScore.reduce((a,b) => a + b) / muridScore.length,
  },
  
};

console.log(hasil);






  







