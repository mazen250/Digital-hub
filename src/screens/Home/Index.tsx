import ItemList from "./ItemList";

import todoStore from "../../stores/Task";
import { useEffect } from "react";
import AddTask from "./AddTask";
function Index() {
  const { tasks, settasks } = todoStore();

  const checkTasks = () => {
    const localTasks = localStorage.getItem("tasks");
    if (localTasks) {
      settasks(JSON.parse(localTasks));
    }
  };
  useEffect(() => {
    checkTasks();
  }, []);
  return (
    <div className="bg-gray-900 w-full min-h-screen">
      <div className="text-center text-white text-4xl font-bold pt-5">
        Task Manager
      </div>
      <AddTask />
      {tasks.length === 0 && (
        <div className="text-center text-white text-2xl font-bold pt-5">
          No Tasks
        </div>
      )}
      {tasks.length > 0 && <ItemList task={tasks} />}
    </div>
  );
}

export default Index;
