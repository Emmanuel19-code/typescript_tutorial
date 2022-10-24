


const RaisedToPower=(firstnumber:number,secondnumber:number):String=>{
    let result=1;
    let final
    if(firstnumber<0)
    {
        console.log("number cannot be less than 0");
    }
    else
    {
        if(secondnumber>0){
              for(let i=1;i<=secondnumber;i++)
             {
            result=result*firstnumber
            final=result
            }
        }
        else
        {
            secondnumber=Math.abs(secondnumber); 
             for(let i=1;i<=secondnumber;i++)
             {
            result=result*firstnumber
            final=1/result
            }
        }
}
return `this is the result ${final}`
}

let ans=RaisedToPower(5,-5)
console.log(ans);
