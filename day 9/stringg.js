let str = new String('abc');
let str2 = 'ayam goreng';
console.log(str);
console.log(str2);
console.log(str2.charAt(1));
console.log(str2.length);
console.log(str2.includes('ayam'));
if(str2.includes('ayam'))console.log('ada ayam di dalam variable ini');
console.log(str2.indexOf('ayan'));

if(str2.indexOf('kucing') == -1)
console.log('gak ada kucing di dalam variable itu');
console.log(str2.lastIndexOf('a'));


console.log(str2.slice(0,4));


console.log(str2.toLocaleUpperCase());
console.log(str2.toUpperCase());
console.log(str2.toLocaleLowerCase());
console.log(str2.toLowerCase());


