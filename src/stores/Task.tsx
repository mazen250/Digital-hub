import { create } from "zustand";
import { task } from "../types/Task";

interface Task {
  tasks: task[];
  settasks: (tasks: task[]) => void;
  addtask: (task: task) => void;
  edittask: (id: string, task: task) => void;
  deleteTask: (id: string) => void;
}

const taskStore = create<Task>((set) => ({
  tasks: [],
  settasks: (tasks: task[]) => set(() => ({ tasks })),
  addtask: (task: task) => {
    set((state: { tasks: task[] }) => ({ tasks: [...state.tasks, task] }));
    localStorage.setItem("tasks", JSON.stringify(taskStore.getState().tasks));
  },
  edittask: (id, newTask) => {
    set((state: { tasks: task[] }) => ({
      tasks: state.tasks.map((task) =>
        task.id === parseInt(id) ? newTask : task
      ),
    }));
    console.log("tasks", taskStore.getState().tasks);
    localStorage.setItem("tasks", JSON.stringify(taskStore.getState().tasks));
  },
  deleteTask: (id) => {
    set((state: { tasks: task[] }) => ({
      tasks: state.tasks.filter((task) => task.id !== parseInt(id)),
    }));
    localStorage.setItem("tasks", JSON.stringify(taskStore.getState().tasks));
  },
}));

export default taskStore;
