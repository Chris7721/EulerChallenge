function nthPrime(n) {
  // Good luck!
  return firstNPrimeNumbers(n);
}

let primes = [2];
function isPrime(num){
    for(let i = 2; i <= Math.ceil(Math.sqrt(num)); i++){
        if(num % i == 0){
            return false;
        }
    }
  return true;
}
function firstNPrimeNumbers(n){    
    let i = 3;
    do {
      
      // console.log(i);
        if(isPrime(i)){
        primes.push(i);
      }i = i + 2;
      
    } while (primes.length < n);
    console.log(primes);
    if(primes.length > 0){
    return primes[primes.length-1]
  }
    return [0] 
}
console.log(nthPrime(5));

https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-7-10001st-prime