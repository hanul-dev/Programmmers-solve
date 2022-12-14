function solution(num) {
  
  let count = 0;
  while(num !== 1){
      if(count >= 500) { return -1; }
      
      if(num % 2 == 0) { num /= 2}
      else { num = num * 3 + 1}
      
      count++;
  }
  
  return count;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));