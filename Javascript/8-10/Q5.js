//Q5  Find the Smallest of Array Elements

var arr=[1,-5,25,20];
var min=arr[0];

for(var i=0; i<arr.length; i++) {
    if(arr[i]<min) {
       min = arr[i];
    }
}
console.log("Smallest number = ",min);

