import React from 'react'

const Closure = () => {

  function outerFunction(num1) {
    let num2 = 10;

    function innerFunction() {

      let sum = num1 + num2;
      return sum
    }

    return innerFunction()
  }
  const res = outerFunction(20);
  console.log(res)


  function counter(s) {
   // var s = 10

    return function add(a) {
      let result = s * a;
      return result;

    }
   // return add(a)
  }

  let val = counter(10)(5);
  console.log(val)

  return (
    <div style={{ border: "1px solid black", height: "200px", width: "240px", margin: "10px", padding: "10px" }}>
      <h3>Closure </h3>
      <div>{res}</div>
    </div>
  )
}
export default Closure;
