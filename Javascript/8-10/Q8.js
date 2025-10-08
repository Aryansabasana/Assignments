//Q8  Count positive,negative and zero numbers;

var arr=[1,5,25,20,0,0,-2,-8,-9];
var neg=0;
var pos=0;
var zero=0;
for(var i=0; i<=arr.length; i++) {
  if(arr[i]<0) {
      neg++;
  }
  
  else if(arr[i]>0) {
      pos++;
  }
  
  else {
      zero++;
  }
}
console.log("positve numbers = ",pos);
console.log("Negative numbers = ",neg);
console.log("Zeros = ",zero);


