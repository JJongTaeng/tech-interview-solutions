import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, message, Radio, RadioChangeEvent, Space } from 'antd';
import { nanoid } from 'nanoid';
import solutionList from '../mock/mockSolutions';
import { ROUTEPATH } from '../types';

function Solutions() {
  const [value, setValue] = useState();
  const param = useParams<{ number: string }>();
  const navigate = useNavigate();
  if (!param.number) throw new Error('solution number invalid');
  const pageNumber = parseInt(param.number, 10);
  const isLastSolution = solutionList.length === pageNumber;
  const isExceedSolutionNumber = solutionList.length < pageNumber;
  const solution = solutionList[pageNumber - 1];
  const nextPageNumber = pageNumber + 1;

  if (isExceedSolutionNumber) {
    navigate(`${ROUTEPATH.SOLUTIONS}/${solutionList.length}`);
  }

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

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
            navigate(`${ROUTEPATH.SOLUTIONS}/${nextPageNumber}`);
          }}
        >
          다음문제
        </Button>,
      ]}
    >
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          {solution.list.map((item, index) => (
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

export default Solutions;
