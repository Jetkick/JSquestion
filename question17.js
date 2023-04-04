
// 배열 원소의 길이
/*
문제 설명
문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ strlist 원소의 길이 ≤ 100
strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.

입출력 예 #1

["We", "are", "the", "world!"]의 각 원소의 길이인 [2, 3, 3, 6]을 return합니다.

입출력 예 #2

["I", "Love", "Programmers."]의 각 원소의 길이인 [1, 4, 12]을 return합니다.
*/

/*
배열을 순회하면서 나온 값들을 차례대로 길이로 변환하여, 새로운 배열에 담아 리턴한다.
배열 순회에는 foreach, map, sort 등이 있다.
map 메소드는 반환시 새로운 배열에 담아 반환해준다.
*/

function solution(strlist) {
  // 새로운 변수를 선언하고 빈 배열을 할당해준다.
  const answer = [];

  // 매개변수 값을 foreach 메소드로 순회한다.
  // 순회하면서 매개변수에 할당되어 있는 문자열 값을
  // 길이로 변환해준후, 빈 배열 변수에 담아 반환한다.
  strlist.forEach(element =>
    answer.push(element.length)
    )
  return answer
}
solution(["we", 'aer', "the", 'world!']);

// map 메소드를 사용했을 때의 예시
function solution2 (strlist) {
  return strlist.map(element => element.length);
}

solution2(["we", 'aer', "the", 'world!']);