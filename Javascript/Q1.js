//Q1 Student Grade Calculator

var s1=50;
var s2=95;
var s3=85;
var s4=85;
var s5=95;
var marks=s1+s2+s3+s4+s5;
console.log(marks);
var percentage = (marks/600)*100;
console.log("percentage =",percentage);
if(percentage >=90) {
    console.log("Grade A");
}

else if(percentage >= 80 && percentage <=89) {
    console.log("Grade B");
}


else if(percentage >= 70 && percentage <=79) {
    console.log("Grade C");
}


else if(percentage >= 60 && percentage <=69) {
    console.log("Grade D");
}

else {
    console.log("Fail");
}