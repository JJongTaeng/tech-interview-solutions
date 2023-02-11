import { atom } from 'recoil';
import SessionStorageManager from '../manager/SessionStorageManager';

const storage = SessionStorageManager.getInstance();

export const subjectAtom = atom({
  key: 'subjectAtom',
  default: '',
});

export const questionCountAtom = atom({
  key: 'questionCountAtom',
  default: 0,
});

export const questionAnswerAtom = atom<number[]>({
  key: 'questionAnswerAtom',
  default: (storage.getStorage('questionAnswer') as number[]) || [],
});
