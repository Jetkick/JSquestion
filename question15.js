
// 배열 자르기
/* 
정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
2 ≤ numbers의 길이 ≤ 30
0 ≤ numbers의 원소 ≤ 1,000
0 ≤num1 < num2 < numbers의 길이

입출력 예 설명

입출력 예 #1

[1, 2, 3, 4, 5]의 1번째 인덱스 2부터 3번째 인덱스 4 까지 자른 [2, 3, 4]를 return 합니다.

입출력 예 #2

[1, 3, 5]의 1번째 인덱스 3부터 2번째 인덱스 5까지 자른 [3, 5]를 return 합니다.
*/


/*
원본 배열을 slice 메소드로 num 범위 값 만큼 추출하여 새로운 배열에 반환합니다.
slice 메소드는 새로운 배열 객체로 반환하니 slice 메소드에 num1, num2 값을 넣어
새 배열에 담아냅니다.
*/

function solution (numbers, num1, num2) {
  // 숫자 num2 값과 index 번호의 값의 시작 범위가 다르므로 값의 범위가 일치하도록 1을 더해준다.
  const answer = numbers.slice(num1, num2 + 1);
  return answer
}