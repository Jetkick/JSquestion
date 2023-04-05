
// 문자열 뒤집기
/*
문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000

입출력 예 #1

my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.

입출력 예 #2

my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.
*/

/*
reverse 메서드가 먼저 생각이 날 수 있지만 reverse 메서드는 배열의 메서드 이므로
편하게 문자열을 뒤집을 수는 없다. 그래서 문자열을 배열로 만든 후에 뒤집어서 문자열로 반환하는
방법으로 접근한다. 
*/


function solution(my_string) {
  // 문자열을 split 메서드로 배열로 쪼갠후 reverse 메서드로 뒤집은 후
  // join 메서드로 다시 문자열로 만들어서 반환했다.
  // split('')의 의미는 split 메서드의 구분자에 문자열을 각각의 문자 별로 잘라내어
  // 배열에 저장한다는 의미이다.
  return my_string.split('').reverse().join('');
}
solution()