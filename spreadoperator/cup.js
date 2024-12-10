let arr=[1,2,3,4];
let carr=[...arr];
console.log(carr);//we can copy array into another array
let arr1=[1,2,3,4];
let arr2=[5,6,7,8];
let combinedarr=[...arr1, ...arr2];
console.log(combinedarr);// we can merge two arrays
  

//spread operator with objects 
let obj={a:1,b:2};
let obj1={c:3,d:4}
let comb={...obj,...obj1};
console.log(comb);
let obj2={...obj1};
console.log(obj2);

//rest operator
//let input=[1,2,3,4]
 function sum(...inputvalues){
     let ans=0;
    for(let i=0;i<inputvalues.length;i++){
        ans+=inputvalues[i];
     }
     console.log(ans);
 }
 sum(1,2,3,4);
   
//rest operator in objects
function greet(firstname,lastname,...register){
    console.log("Firstname :",firstname)
    console.log("secondname",lastname);
    console.log("register number",register)
}




greet("ajey","kumaran","111723201003")