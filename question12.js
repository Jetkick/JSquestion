
// 머쓱이네 피자 나눠 먹기 (1)

/*
문제 설명
머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

제한사항
1 ≤ n ≤ 100

입출력 예 설명
입출력 예 #1

7명이 최소 한 조각씩 먹기 위해서 최소 1판이 필요합니다.
입출력 예 #2

1명은 최소 한 조각을 먹기 위해 1판이 필요합니다.
입출력 예 #3

15명이 최소 한 조각씩 먹기 위해서 최소 3판이 필요합니다.

*/


function solution(n) {
  // 변수 answer에 할당받은 n을 7로 나눈후
  let answer = Math.floor((n / 7))
  
  console.log(answer % 7);
  console.log(answer);
  
  // 변수 answer를 7로 나머지 값을 계산한 후 나온 몫을 반환.
  if (answer % 7 === 0) {
    return console.log(answer + 1)
  } else if (answer % 7 === 1) {
    return console.log(answer)
  } else {
    return console.log(answer + 1)
  }


}

solution(32);

/*
 -- 답안지 ??
int answer = 0;
if(n % 7 == 0){
    answer = n / 7;}
else if(n % 7 != 0){
    answer = (n / 7) + 1;
}
return answer;
 -- 

이해 자체를 못해서 힌트를 받아 풀어봤지만 결국 문제를 해결 못함.
몫이 1이 나온 값 중 1을 더해야 하는 숫자가 있는데
(a % 7 === 1) 에서 값이 충돌해서 접근이 안됨;


*/