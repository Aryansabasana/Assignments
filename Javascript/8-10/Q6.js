//Q6  Find the even and odd of Array Elements

var arr=[1,5,25,20];
var count=0;
var count1=0;
for(var i=0; i<arr.length; i++) {
    if(arr[i]%2==0) {
       count=count+1;
    }
    else {
        count1=count1+1;
    }
}
console.log("even numbers = ",count);
console.log("odd numbers = ",count1);

