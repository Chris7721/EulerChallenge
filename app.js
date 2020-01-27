function largestPalindromeProduct(n) {
    let start, end;
  let palindromes = [];
  if(n == 2){
    start=10; end=99;
  }
  else if(n == 3){
    start=100; end=  999;
  }
  for(let i = start; i <= end; i++){

    for(let j = start; j <= end; j++){
      if(palindromeChecker(i*j)){
        palindromes.push(i*j);
      }
    }
  }
  return maxPalindrome(palindromes);
}


function palindromeChecker(num){
  if(JSON.stringify(num) === JSON.stringify(num).split("").reverse().join("")){
    return true
  }
  return false
}

function maxPalindrome(palindromes){
  let currLargest = 0;
  for(let i = 0; i <= palindromes.length; i++){
    if(palindromes[i] > currLargest){
       currLargest = palindromes[i];
       }
  }
  return currLargest;
}

console.log(largestPalindromeProduct(3));
