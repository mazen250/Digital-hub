import { task } from "../../types/Task";
import SingleItem from "./SingleItem";
import taskStore from "../../stores/Task";
import { message } from "antd";
function ItemList({ task }: { task: task[] }) {
  const sortTasksByStatus = (task: task) => {
    switch (task.status) {
      case "NotStarted":
        return 1;
      case "InProgress":
        return 2;
      case "Completed":
        return 3;
      default:
        return 0;
    }
  };

  const { settasks } = taskStore();
  const handleSort = () => {
    const sorted = task.sort(
      (a, b) => sortTasksByStatus(a) - sortTasksByStatus(b)
    );
    settasks(sorted);
    message.success("Sorted by Status");
  };

  //sort by create date
  const handleSortByDate = () => {
    const sorted = task.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
    settasks(sorted);
    message.success("Sorted by Date");
  };

  return (
    <div>
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full ml-16"
        onClick={handleSort}
      >
        Filter by Status
      </button>
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full ml-8"
        onClick={handleSortByDate}
      >
        Filter by Date
      </button>
      <div className="flex items-center justify-start flex-row flex-wrap w-full mt-4 sm:pl-10">
        {task.map((task: task) => (
          <SingleItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
