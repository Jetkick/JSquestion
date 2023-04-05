
// 특정 문자 제거하기
/*
문제 설명
문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 100
letter은 길이가 1인 영문자입니다.
my_string과 letter은 알파벳 대소문자로 이루어져 있습니다.
대문자와 소문자를 구분합니다.

입출력 예 #1

"abcdef" 에서 "f"를 제거한 "abcde"를 return합니다.

입출력 예 #2

"BCBdbe" 에서 "B"를 모두 제거한 "Cdbe"를 return합니다.
*/

/*
string 메소드를 이용하여 my_string 매개변수와 letter 매개변수를 비교하여
letter 변수에 포함되어 있는 문자열을 my_string 변수에서 삭제한 후 반환한다.
*/

function solution(my_string, letter) {
  // String 메소드 replaceAll 메소드를 이용하여
  // my_string과 일치하는 letter의 값을 찾아서 삭제함으로써
  // 원하는 값에 도달.
  const answer = my_string.replaceAll(letter, '');
  return answer;
}
solution("BCBdbe", 'B');

function solution2(my_string, letter) {
  // split 메소드를 이용하여 값을 삭제한 후
  // join 메소드로 붙이는 방법도 있다.
  return my_string.split(letter).join('');
}
solution2("BCBdbe", "B");