import create from "zustand";

export const useDateStore = create((set) => ({
  selectedDate: new Date(),
  setSelectedDate: (newDate) => set({ selectedDate: newDate }),
}));

export const useDashboardButton = create((set) => ({
  activeButton: "Dashboard",
  setActiveButton: (buttonName) => set({ activeButton: buttonName }),
}));

export const useTransactionStore = create((set) => ({
  reload: false,
  setReload: (value) => set({ reload: value }),
}));
