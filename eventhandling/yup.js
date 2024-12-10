// const hover=document.getElementById('hoverbox');
// const status=document.getElementById("status");
// const click=document.getElementById('click');
// hover.addEventListener('mouseover',()=>{
//   status.textContent="mouse is over the box";
// })
// hover.addEventListener('mouseout',()=>{
//     status.textContent="mouse left";
// })
// click.addEventListener('click',()=>{
//   status.textContent="you have clicked";
//})
const form=document.getElementById('form');

const message=document.getElementById('message');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const name=document.getElementById('name').value;
  const number=document.getElementById('number').value;
  const dob=document.getElementById('dob').value;
  const quali=document.getElementById('quali').value;
  message.textContent=`Hello,${name},we got your mobile number ${number},the dob is${dob},your qualifiaction is ${quali}`;
})