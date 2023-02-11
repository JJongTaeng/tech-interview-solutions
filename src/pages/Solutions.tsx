import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, message, Radio, Space } from 'antd';
import { nanoid } from 'nanoid';
import { useRecoilValue } from 'recoil';
import solutionList from '../mock/mockSolutions';
import { ROUTEPATH } from '../types';
import { questionAnswerAtom } from '../store';
import useQuestion from '../hooks/useQuestion';

const INIT_NUMBER = 1;

function Solutions() {
  const param = useParams<{ number: string }>();
  if (!param.number) throw new Error('solution number invalid');
  const pageNumber = parseInt(param.number, 10);
  const questionAnswer = useRecoilValue(questionAnswerAtom);
  const { setAnswerByNumber } = useQuestion();
  const [value, setValue] = useState(questionAnswer[pageNumber] || INIT_NUMBER);
  const navigate = useNavigate();
  const isLastSolution = solutionList.length === pageNumber;
  const isExceedSolutionNumber = solutionList.length < pageNumber;
  const solution = solutionList[pageNumber - 1];
  const nextPageNumber = pageNumber + 1;

  if (isExceedSolutionNumber) {
    navigate(`${ROUTEPATH.SOLUTIONS}/${solutionList.length}`);
  }

  useEffect(() => {
    setValue(questionAnswer[pageNumber] || INIT_NUMBER);
  }, [pageNumber]);

  return (
    <Card
      title={`${pageNumber}. ${solution.title}`}
      actions={[
        <Button
          key={nanoid()}
          onClick={() => {
            if (isLastSolution) {
              message.info('마지막 문제입니다.');
              return;
            }
            setAnswerByNumber(pageNumber, value);
            navigate(`${ROUTEPATH.SOLUTIONS}/${nextPageNumber}`);
          }}
        >
          다음문제
        </Button>,
      ]}
    >
      <Radio.Group
        onChange={e => setValue(parseInt(e.target.value as string, 10))}
        value={value}
      >
        <Space direction="vertical">
          {solution.list.map((item, index) => (
            <div key={nanoid()}>
              <Radio value={index + 1}>
                {index + 1}. {item}
              </Radio>
            </div>
          ))}
        </Space>
      </Radio.Group>
    </Card>
  );
}

export default Solutions;
