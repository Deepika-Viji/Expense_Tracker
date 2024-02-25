import create from "zustand";

const useDateStore = create((set) => ({
  selectedDate: new Date(),
  setSelectedDate: (newDate) => set({ selectedDate: newDate }),
}));

export default useDateStore;
