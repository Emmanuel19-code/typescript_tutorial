const button=document.querySelector(".btn")
let result:HTMLElement=document.querySelector(".result") as HTMLElement
const passwordValue=document.querySelector(".passwordValue")
const passwordinput:HTMLInputElement=document.querySelector(".passwordinput") as HTMLInputElement



const getPassword=()=>{
    const chars= "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+={[}]|\:;<,>.?/ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let passwordLength=10
    let password:string=""
    let i:number
    for (i=1;i<=passwordLength;i++){
        let randomNumber=Math.floor(Math.random()*chars.length)
        password+=chars.substring(randomNumber,randomNumber+1)
        result.innerHTML=password
    }
  
}

button?.addEventListener("click",()=>{
    
})

passwordValue?.addEventListener("click",()=>{
  getPassword()
})

