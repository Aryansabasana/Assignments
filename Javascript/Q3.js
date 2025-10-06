//Q3 income tax calculator

var income=550000;
if(income<=250000) {
    console.log("No Tax");
}

else if(income >= 250001 && income<=500000) {
    console.log("tax to be paid =",(income*5)/100);
}

else if(income >= 500001 && income<=1000000) {
    console.log("tax to be paid =",(income*20)/100);
}

else {
    console.log("tax to be paid =",(income*30)/100);
}
