
// 옷가게 할인 받기

/*
문제 설명
머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

제한사항
10 ≤ price ≤ 1,000,000
price는 10원 단위로(1의 자리가 0) 주어집니다.
소수점 이하를 버린 정수를 return합니다.

입출력 예 #1

150,000원에서 5%를 할인한 142,500원을 return 합니다.

입출력 예 #2

580,000원에서 20%를 할인한 464,000원을 return 합니다.
*/


/*
if문을 통해 문제를 해결한다.
각 조건마다 할인율에 따른 가격의 범위를 조건으로 설정한 후
할인율을 적용한 값을 반환하도록한다.
*/

function solution () {

  if (10 <= price && price <= 1000000) {
    if (price < 100000) {
      return Math.floor(price)
    } else if (price >= 100000 && price < 300000) {
      const answer = (price * 5 / 100)
      return Math.floor(price - answer)
    } else if (price >= 300000 && price < 500000) {
      const answer = (price * 10 / 100)
      return Math.floor(price - answer)
    } else if (price >= 500000) {
      const answer = (price * 20 / 100)
      return Math.floor(price - answer)
    }
  }
  
}

solution()