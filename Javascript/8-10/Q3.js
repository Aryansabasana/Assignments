//Q3  Find the Average of Array Elements

var arr=[1,5,2,2];
var sum=0;
for(var i=0; i<arr.length; i++) {
    sum=sum+arr[i];
}
console.log("Sum of array = ",sum);
console.log("average of array = ",sum/arr.length);