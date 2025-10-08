//Q4 Voting eligibility checker

var age = 17;
if(age <=18 && age>0) {
	console.log("Not eligible to vote",age); 
    
}
	
	else if(age > 18) {
		console.log("Eligible to vote",age);
	}
	
	else {
	    console.log("Invalid age");
	}