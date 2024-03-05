

const PrimNonPrim=()=>{

     //immutable
     let str = "hai welcome";
     str = "Hello Good morning"; //it is possible to redefine the value
    // str[0]='M' // not possible to change the value , if so, will get a read only error message.
     console.log(str);
 
 
     //mutable
     let arr=[3,5,6,7];
     arr[0]=6;
     console.log(arr);
 
     let obj1={name:"sonia", age:39}
     let obj2={name:"ryan",age:8};
    

     let obj3=obj1;
     obj3.name="rion";
     if(obj1===obj2)
     {
         console.log("same");
     }
     else
     {
         console.log("not same")
     }
 
     if(obj1===obj3)
     {
         console.log("same");
     }
     else
     {
         console.log("not same")
     }

     x=5;
     var x;
     (function fun(){
        {
            let x=1;
            x++;
            console.log(x);
        }
        console.log(x);
     })();

     x=5;
     var x;
     (function fun1(){
        {
            var y=1;
            x++;
            console.log(x);
        }
        console.log(y);
     })();



     let arr1=[6,7,5,8,9,6];
     let res= arr1.filter((item,i)=>{
      if(arr1.indexOf(item)===i){
        return item
      }
     })

     
console.log(res);


    return(
        <div style={{ border: "1px solid black", width: "230px", height: "200px", margin: "10px", padding: "10px" }}>
             <div>{str}</div>
            <div>{arr}</div>
           
        </div>
    )
}
export default PrimNonPrim;