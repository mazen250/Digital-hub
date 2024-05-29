import { useState } from "react";
import taskStore from "../../stores/Task";
import { message } from "antd";
function AddTask() {
  const { addtask } = taskStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("NotStarted");

  const handleAddTask = () => {
    // alert("Task is " + title + description + status);
    if (title === "" || description === "" || status === "") {
      message.error("Title and description are required");
      return;
    }
    addtask({
      id: Math.floor(Math.random() * 1000000000),
      title,
      description,
      status,
      statusText:
        status === "NotStarted"
          ? "Not Started"
          : status === "InProgress"
          ? "In Progress"
          : "Completed",
      createdAt: new Date(),
    });
    message.success("Task added successfully");
  };
  return (
    <div className="bg-gray-600/40 rounded-lg shadow-sm p-4 mb-6 sm:w-1/2 w-[90%] mx-auto mt-6">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium text-white" htmlFor="title">
            Title
          </label>
          <input
            className=" bg-gray-300 border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Enter a title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <label
            className="text-sm font-medium text-white"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="bg-gray-300 border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1"
            placeholder="Enter a description"
            rows={3}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-white" htmlFor="status">
              Status
            </label>
            <select
              className=" bg-gray-800  border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 text-white"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="NotStarted">Not Started</option>
              <option value="InProgress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              className="bg-gray-500 hover:bg-gray-800 text-white rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-gray-500 "
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
