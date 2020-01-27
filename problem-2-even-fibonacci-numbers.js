function fiboEvenSum(n) {
  // You can do it!
  let sum = 0;
  let arr = fibonacci(n);
  for(let i = 0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
      sum+= arr[i];
    }
  }
  return sum;
}

function fibonacci(num) {
  let sol = [1,2];
  for (let i = 2; i < num; i++) {
    sol.push(sol[i-1] + sol[i-2]);
  }
  return sol;
}

