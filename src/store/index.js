import { create } from 'zustand';

const zustandStore = create(set => ({
  messages: [],
  pushMessage: payload => set(state => ({ messages: [...state.messages, payload] }))
}));

export default zustandStore;
