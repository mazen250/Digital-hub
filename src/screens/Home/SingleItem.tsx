import { useNavigate } from "react-router-dom";
import { BookOutlined } from "@ant-design/icons";
import { task, taskColors } from "../../types/Task";
function SingleItem({ task }: { task: task }) {
  const taskColorsValue: taskColors = {
    NotStarted: "bg-gray-500",
    InProgress: "bg-yellow-500",
    Completed: "bg-green-500",
  };
  const navigate = useNavigate();
  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };
  return (
    <div className="space-y-4 sm:w-[40%] w-full m-5">
      <div className="bg-gray-300 rounded-lg shadow-sm p-4 grid gap-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-medium">{task.title}</div>
          <div className="flex items-center gap-2">
            <span
              className={`px-2 py-1 rounded-full  
            ${taskColorsValue[task.status as keyof typeof taskColorsValue]}
          text-xs font-medium`}
            >
              {task.statusText}
            </span>
            <button
              className="text-black hover:text-gray-700"
              type="button"
              onClick={() => navigate(`/task/${task.id}`)}
            >
              <BookOutlined className="w-5 h-5" color="black" />
              {/* <span className="sr-only">Edit</span> */}
            </button>
          </div>
        </div>
        <p className="text-gray-500">{task.description}</p>
        {task?.createdAt && (
          <div className="text-sm text-gray-500">
            Created At: {formatDate(task.createdAt.toString())}
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleItem;
