function arithmetic(a, b, operator){
  
   let add = ((operator=='add') ? a+b : (operator=='subtract'? a-b : (operator=='multiply'? a*b : (operator=='divide'? a/b : false)))) 

  return add

 }
 
 arithmetic(5, 2, "divide" )