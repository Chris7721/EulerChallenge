function largestPrimeFactor(number) {
  // Good luck!
  return maxFactor(fact(factors(number)))
}

largestPrimeFactor(13195);

function factors(num){
  let factors = [];
  for(let i = 0; i<=num; i++){
    if(num % i == 0){
       factors.push(i);
       }
  }
  return factors;
}
function maxFactor(arr){
  console.log("third");
  let currLargest = 0;
  for(let i = 0; i <= arr.length; i++){
    if(arr[i] > currLargest){
       currLargest = arr[i];
       }
  }
  return currLargest;
}

function fact(arr){
  let primes = [];
  for(let i =0; i < arr.length; i++){
  //  alert("first of all, I is "+ i);
  if(arr[i] === 2){
    primes.push(arr[i]);
    // return true;
  }
    else{ 
      // alert(findPrimes(arr[i]));
      if(findPrimes(arr[i])){
		primes.push(arr[i]);
      }
    }
    
  }
  return primes;
}
function findPrimes(num){
	for(let i = 2; i < num / 2; i++){
    // alert(i);
		if(num % i == 0){ //checking that there is no remainder from the division
      // alert(i);
			return false;
      // break;
		}
    // alert("prime");
		 //if there was a remainder
	}
  return true;
}