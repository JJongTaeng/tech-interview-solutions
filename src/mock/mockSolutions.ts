const solutions = [
  {
    title: '호이스팅에 대한 설명으로 옳은 것은?',
    list: [
      '호이스팅은 연산자와 관련이 있다.',
      '호이스팅은 변수의 선언이 되어야만 참조가 가능한 현상이다.',
      '호이스팅은 자바스크립트에는 없는 개념이다.',
      '인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미합니다.',
    ],
    answer: 3,
    solution:
      '호이스팅은 자바스크립트 엔진이 실행단계 이전에 변수를 초기화할 때 undefined 값을 할당하면서 발생한다. var, function 키워드로 선언한 식별자에 대해서 발생한다.',
  },
  {
    title: '목데이터 1번',
    list: [
      '제목은 목데이터 1번이다.',
      '제목은 목데이터 2번이다.',
      '제목은 목데이터 3번이다.',
      '제목은 목데이터 4번이다.',
    ],
    answer: 0,
    solution: '목데이터 1번이기 때문에~',
  },
  {
    title: '목데이터 2번',
    list: [
      '제목은 목데이터 1번이다.',
      '제목은 목데이터 2번이다.',
      '제목은 목데이터 3번이다.',
      '제목은 목데이터 4번이다.',
    ],
    answer: 0,
    solution: '목데이터 2번이기 때문에~',
  },
];

export default solutions;