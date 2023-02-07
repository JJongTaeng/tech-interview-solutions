import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { subjectAtom } from '../store/setting';

function Solutions() {
  const { number } = useParams();
  const subject = useRecoilValue(subjectAtom);
  return (
    <div>
      solutions subject = {subject} number = {number}
    </div>
  );
}

export default Solutions;
