function sumOfSquares(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
      sum+= Math.pow(i, 2);  
    }
}

function squareOfSum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;  
    }
    Math.pow(sum, 2);
}