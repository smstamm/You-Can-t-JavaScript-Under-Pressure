// First solution

function isNumberEven(i) {
    
    // i will be an integer. Return true if it's even, and false if it isn't.
    
  if (i % 2 === 0){
    return true;
  }
  else {
    return false;
  }
}


// Refactored solution
function isNumberEven(i) {
    
    // i will be an integer. Return true if it's even, and false if it isn't.
    
  return (i % 2 === 0);
}