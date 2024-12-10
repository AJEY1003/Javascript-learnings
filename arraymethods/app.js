let arr=["Ajey","kumar","bhuvan"];
let num=[1,2,3,4];
//console.log(arr.length);
//arr.unshift("bhuvan");
//arr.shift();
//arr.push("jeevi");
//arr.pop();
let ass=arr.lastIndexOf("Ajey");
let find=arr.find((el)=>el==="bhuvan");
let map=num.map((el)=>el*2)
let filter=num.filter((el)=>el>2).map((el)=>el*2);
let some=num.some((el)=>el<0);
//console.log(some);
let every=num.every((el)=>el>0);
let reduce=num.reduce((a,b)=>a+b,0);
console.log(arr);
let ajey=[1,2,3,4,5,6];
let vijay=ajey.slice(0,4)
console.log(vijay);

console.log(ass)
console.log(find);
console.log(map);
console.log(filter);
console.log(some);
console.log(every);
console.log(reduce);