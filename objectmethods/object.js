let userObject=[{
    id:1,
    username:"Ajey",
    password:"Ajey@123",
    college:"R.M.K"

},
{
    id:2,
    username:"akash",
    password:"Akash@123",
    college:"R.M.K"
}]
let ans=userObject.find(el=>el.id==2)
let ans2=userObject.find(el=>el.password==="Akash@123");
console.log(ans2)
//object.keys
console.log(Object.keys(userObject));
//Object.values
console.log(Object.values(userObject));
console.log(Object.entries(userObject));
console.log(Object.keys(userObject));
console.log(Object.hasOwn(userObject[0],"username"));
console.log(Object.hasOwn(userObject[0],"password"));
//console.log(Object.seal(userObject))  //in seal method we cant add or delete the elements in index starting from 0,instead we can modify the properties
//console.log(Object.isSealed(userObject));
console.log(Object.freeze(userObject));
userObject.forEach(el=>Object.freeze(el))
userObject[0].password="Ajey";
let add=userObject[0].school="sethubhaskara";
//userObject.splice(0,1);
let obj1={
    a:1,
    b:2
}
let obj2={
    c:3,
    d:5
}
Object.assign(obj1,obj2)
console.log(obj1);
console.log(obj2);


console.log(userObject);
