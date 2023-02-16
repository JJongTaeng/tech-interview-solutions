import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Radio, Space } from 'antd';
import { nanoid } from 'nanoid';
import { useRecoilValue } from 'recoil';
import questionList from '../mock/mockSolutions';
import { ROUTEPATH } from '../types';
import { questionAnswerAtom } from '../store';
import useQuestion from '../hooks/useQuestion';

const INIT_NUMBER = 1;

function Questions() {
  const param = useParams<{ number: string }>();
  if (!param.number) throw new Error('solution number invalid');

  const pageNumber = parseInt(param.number, 10);
  const questionAnswer = useRecoilValue(questionAnswerAtom);
  const { setAnswerByNumber } = useQuestion();
  const [value, setValue] = useState(questionAnswer[pageNumber] || INIT_NUMBER);
  const navigate = useNavigate();
  const isLastSolution = questionList.length === pageNumber;
  const question = questionList[pageNumber - 1];

  useEffect(() => {
    if (questionList.length < pageNumber) {
      navigate(`${ROUTEPATH.QUESTIONS}/${questionList.length}`);
    }
  }, []);

  useEffect(() => {
    setValue(questionAnswer[pageNumber - 1] || INIT_NUMBER);
  }, [pageNumber]);

  return (
    <Card
      title={`${pageNumber}. ${question.title}`}
      actions={[
        <Button
          key={nanoid()}
          onClick={() => {
            setAnswerByNumber(pageNumber - 1, value);
            if (isLastSolution) {
              navigate(`${ROUTEPATH.RESULTS}`);
              return;
            }
            navigate(`${ROUTEPATH.QUESTIONS}/${pageNumber + 1}`);
          }}
        >
          {isLastSolution ? '결과보기' : '다음문제'}
        </Button>,
      ]}
    >
      <Radio.Group
        onChange={e => setValue(parseInt(e.target.value as string, 10))}
        value={value}
      >
        <Space direction="vertical">
          {question.list.map((item, index) => (
            <div key={nanoid()}>
              <Radio value={index}>
                {index + 1}. {item}
              </Radio>
            </div>
          ))}
        </Space>
      </Radio.Group>
    </Card>
  );
}

export default Questions;
