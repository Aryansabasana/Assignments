//Q7 Scholarship Eligibility

var s1=85;
var s2=95;
var s3=85;
var s4=85;
var s5=95;
var income = 200000
var marks=s1+s2+s3+s4+s5;
console.log(marks);
var percentage = (marks/500)*100;
console.log("percentage =",percentage);
console.log("Income = ",income)
if(percentage >=85 && income <=300000) {
    console.log("Full Scholarship");
}

else if(percentage >= 70 && income <=500000) {
    console.log("Half Scholarship");
}

else {
    console.log("Not eligible for scholarship");
}
	
	