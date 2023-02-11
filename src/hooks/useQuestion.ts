import { useRecoilState } from 'recoil';
import cloneDeep from 'clone-deep';
import { questionAnswerAtom } from '../store';
import SessionStorageManager from '../manager/SessionStorageManager';

const storage = SessionStorageManager.getInstance();

const useQuestion = () => {
  const [questionAnswer, setQuestionAnswer] =
    useRecoilState(questionAnswerAtom);

  return {
    setAnswerByNumber: (questionNumber: number, answer: number) => {
      const newArray: number[] = cloneDeep(questionAnswer);
      newArray[questionNumber] = answer;
      storage.setStorage('questionAnswer', newArray);
      setQuestionAnswer(newArray);
    },
  };
};

export default useQuestion;
