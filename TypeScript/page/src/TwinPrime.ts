

const TwinPrimes=(firstnumber:number,secondnumber:number)=>{
    let ans
   if(firstnumber%2==0 || secondnumber%2==0){
     console.log("they are not prime numbers");
   }
   else{
      ans=firstnumber+2;
      if(secondnumber===ans){
        console.log("they are twin prime");
      }
   }
}

TwinPrimes(5,7)