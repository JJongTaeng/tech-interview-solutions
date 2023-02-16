import React from 'react';
import { useRecoilValue } from 'recoil';
import { Card } from 'antd';
import styled from '@emotion/styled';
import { nanoid } from 'nanoid';
import { questionAnswerAtom } from '../store';
import questionList from '../mock/mockSolutions';

enum ANSWER {
  NONE,
  ANSWER,
  WRONG,
}

const ResultBox = styled.div<{ type: ANSWER }>`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  ${({ type }) => {
    switch (type) {
      case ANSWER.ANSWER:
        return 'background: dodgerblue';
      case ANSWER.WRONG:
        return 'background: crimson';
      case ANSWER.NONE:
        return 'background: #bbb';
      default:
        return 'background: #bbb';
    }
  }}
`;

function Results() {
  const questionAnswer = useRecoilValue(questionAnswerAtom);
  return (
    <Card
      title="결과"
      bodyStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {questionList.map((question, index) => {
        let answerType;
        if (questionAnswer[index] === undefined) answerType = ANSWER.NONE;
        else if (question.answer === questionAnswer[index])
          answerType = ANSWER.ANSWER;
        else answerType = ANSWER.WRONG;
        return (
          <ResultBox key={nanoid()} type={answerType}>
            {index + 1}.
            {questionAnswer[index] === undefined
              ? '선택 안함'
              : ` ${questionAnswer[index] + 1}`}
          </ResultBox>
        );
      })}
    </Card>
  );
}

export default Results;
