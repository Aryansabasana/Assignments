//Q6 Temprature Category

var temp = 37;
if(temp<0) {
	console.log("Freezing cold"); 
    
}
	
	else if(temp >0 && temp<=15) {
		console.log("very cold");
	}
	
	else if(temp >=16 && temp<=25){
	    console.log("Cold");
	}
	
	else if(temp >=26 && temp<=35){
	    console.log("Warm");
	}
	
	else {
	    console.log("Hot");
	}