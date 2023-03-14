let arr = [10,11,12,13];
console.log(arr);

arr.push(1);
arr.pop(arr)
arr.shift();
arr.unshift(2);


console.log(arr);

let join = arr.join( ' ');//mengubah array menjadi stringg
console.log(join);
console.log(arr.indexOf(11))
console.log(arr.lastIndexOf(12));
console.log(arr.findIndex((val) => val == 11));

()=>{
    console.log('asd');
    return 100;
};
arr.length;



let arrNum = [1,2,3,4,5];
let sum = 0;
for(let i = 0; i < arrNum.length;i++){
    sum += arrNum[i];
    i++;
}
console.log(sum);



