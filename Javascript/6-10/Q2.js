//Q2 Electricity Bill calculator

var unit = 250;
var bill;
if(unit<=100) {
    bill = unit*5
    console.log("total bill = ",bill);
}
	else if(unit<=200) {
		bill = (unit-100)*7 +500;
		console.log("total bill = ",bill);
	}
	
else if(unit<=300) {
		bill = (unit-200)*7 + 1200;
		console.log("total bill = ",bill);
	}
	
	else {
	    bill = (unit - 300)*10 + 1900;
	    console.log("total bill = ",bill);
	}
	
	