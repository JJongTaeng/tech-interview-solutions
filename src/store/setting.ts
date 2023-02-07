import { atom } from 'recoil';

export const subjectAtom = atom({
  key: 'subjectAtom',
  default: '',
});

export const solutionCountAtom = atom({
  key: 'solutionCountAtom',
  default: 0,
});
