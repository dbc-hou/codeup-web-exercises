function isPrime(num) {
    var numFactors = 0
    for (var i=0; i<=num; i++) {
        if (num % i === 0) {
            numFactors++;
        }
        if (numFactors === 3) {
            break;
        }
    }
//    console.log(numFactors);
    if (numFactors > 2) {
        return false;
    } else {
        return true;
    }
}

isPrime(79);

function First50Primes() {
    let i = 1
    let j = 2
    console.log("Here are the first 50 prime numbers!");
    while (i<=50) {
        if (isPrime(j)) {
            console.log("# " + i + ": " + j);
            i++;
        }
        j++
    }
}

//First50Primes();

function PrimesTo1000() {
    let i = 1
    let j = 2
    console.log("Here are the first 50 prime numbers!");
    while (j<1000) {
        if (isPrime(j)) {
            console.log("# " + i + ": " + j);
            i++;
        }
        j++
    }
}

PrimesTo1000();