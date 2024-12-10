// //named functions
// console.log(sum(1,2,3));
// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(greet("Ajey"))
// function greet(...input){
//     return "hello"+input;
// }
//synchronous function 
function add(a,b){
    return a+b;
}
function sub(c,d){
    return c-d;
}
function main(){
    setTimeout(()=>{
    console.log("start");
    let sum=add(2,3);
    console.log("result",sum);},2000);

}
main()
function msub(){
    console.log("end");
    let subt=sub(5,4);
    console.log("subt is",subt);
     
}
msub();//synchronous function wait for previous function to be resolved or completed but asynchronous function will not do like that 

//aynchronous function
// function greetAsync(){
//     setTimeout(()=>{
//         console.log("Ajey is my friend")
//     },2000);

// }
// console.log("Start");
// greetAsync();
// console.log("end");