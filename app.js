const btn=document.querySelector("button");
const h1=document.querySelector("h1");
const span=document.querySelector("span");

// Fetching API
const xhr=new XMLHttpRequest();
let id=1;
const url="https://api.adviceslip.com/advice"
const getData=async function(){
    id++;
    span.textContent=`# ${id}`;
    const response=await fetch(`${url}/${Math.floor(Math.random() * 118) + 1}`);
    if(response.ok){
         const data=await response.json();
        return data.slip.advice;
        }
    else{
        console.log("something went wrong..");
    }
}


btn.addEventListener("click",()=>{
    h1.textContent=""
 getData()
.then(data=>{
    h1.textContent=`"${data}"`;
})
.catch(()=>{
    console.log("Check your internet connection");
})
})
