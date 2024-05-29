import { create } from "zustand";
import User from "../types/User";

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

const userStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: User) => set(() => ({ user })),
  logout: () => set(() => ({ user: null })),
}));

export default userStore;
