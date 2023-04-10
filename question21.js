
// 중복된 숫자 개수
/*
문제 설명
정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array의 원소 ≤ 1,000
0 ≤ n ≤ 1,000

입출력 예 #1

[1, 1, 2, 3, 4, 5] 에는 1이 2개 있습니다.

입출력 예 #2

[0, 2, 3, 4] 에는 1이 0개 있습니다.
*/


/*
배열 메서드 filter 를 사용하여 매개 변수 array에 매개 변수 n의 값이 일치하는 것이 있는지 확인. 
*/

function solution(array, n) {
  // 필터 메서드를 사용하여 배열 내 값을 순회하며 
  // element는 n 과 동일하다는 조건을 걸어
  // true 값만 새 배열에 담아 변수에 담아내었다.
  // 그 후 길이 값을 반환하여 n이 몇 개 있는 지를 찾아내었다.
  const answer = array.filter(element => element === n)
  return answer.length
}
solution();