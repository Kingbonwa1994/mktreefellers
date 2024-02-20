import {create} from 'zustand';

const useQuestionnaireStore = create((set) => ({
  currentQuestion: 0,
  responses: [],
  setCurrentQuestion: (questionIndex) => set({ currentQuestion: questionIndex }),
  addResponse: (response) => set((state) => ({ responses: [...state.responses, response] })),
}));

export default useQuestionnaireStore;
