// const arr=[1,2,3,4];
// const [first,second,third]=arr;
// console.log(first,second,third);

let obj={
    name:"ajey",
    dept:"AIDS"
}
// const {name,dept}=obj;
// console.log(name);
// console.log(dept);

const {name,dept,project="VRdevelopment"}=obj;
console.log(name,dept,project);
