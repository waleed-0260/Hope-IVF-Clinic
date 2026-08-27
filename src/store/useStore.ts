import { create } from "zustand";

export type AppointmentFormState = {
  step: number;
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  message: string;
};

type StoreState = {
  mobileNavOpen: boolean;
  appointmentForm: AppointmentFormState;
  activeFaqIndex: number | null;
  toggleNav: () => void;
  closeNav: () => void;
  setFormField: (field: keyof AppointmentFormState, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetForm: () => void;
  toggleFaq: (index: number) => void;
};

const initialForm: AppointmentFormState = {
  step: 1,
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  message: "",
};

export const useStore = create<StoreState>((set) => ({
  mobileNavOpen: false,
  appointmentForm: initialForm,
  activeFaqIndex: null,
  toggleNav: () =>
    set((state) => ({ mobileNavOpen: !state.mobileNavOpen })),
  closeNav: () => set({ mobileNavOpen: false }),
  setFormField: (field, value) =>
    set((state) => ({
      appointmentForm: { ...state.appointmentForm, [field]: value },
    })),
  nextStep: () =>
    set((state) => ({
      appointmentForm: {
        ...state.appointmentForm,
        step: state.appointmentForm.step + 1,
      },
    })),
  prevStep: () =>
    set((state) => ({
      appointmentForm: {
        ...state.appointmentForm,
        step: Math.max(1, state.appointmentForm.step - 1),
      },
    })),
  resetForm: () => set({ appointmentForm: initialForm }),
  toggleFaq: (index) =>
    set((state) => ({
      activeFaqIndex: state.activeFaqIndex === index ? null : index,
    })),
}));