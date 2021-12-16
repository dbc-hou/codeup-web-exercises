function showMultiplicationTable(integerInput) {
    for (i=1;i<11;i++) {
        console.log(integerInput + " x " + i + " = " + integerInput*i);
    }
}

function randomOddEven() {
    for (i=1;i<11;i++) {
        let j = 20 + parseInt(Math.floor(Math.random() * 180));
        if (j % 2 === 0) {
            console.log(j + " is an even number.")
        } else {
            console.log(j + " is an odd number.")
        }
    }
}

function decrementByFive(){
    for(i=20;i>0;i--){
        console.log(i * 5);
    }
}

function repeatInteger(){
    for(i=1;i<10;i++){
        let k = i.toString();
        for(j=1;j<10;j++) {
            k = k + i.toString();
            console.log(k);
        }
    }
}
showMultiplicationTable(7);
randomOddEven();
//repeatInteger();
decrementByFive(100);