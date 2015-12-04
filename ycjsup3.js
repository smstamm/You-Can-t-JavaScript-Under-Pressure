
// i will be a string, but it may not have a file extension. Return the file extension (with no period) if it has one, otherwise false


// Solution using indexOf
function getFileExtension(i) { 
  var dot = i.indexOf(".");
  
    if (dot !== -1){
      i = i.slice(dot + 1);
    }
    else {
      i = false;
    }
  return i;
}

console.log(getFileExtension('png.io'));
console.log(getFileExtension('flower'));