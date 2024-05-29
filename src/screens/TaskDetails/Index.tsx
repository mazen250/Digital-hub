import { useParams, useNavigate } from "react-router-dom";
import taskStore from "../../stores/Task";
import { useEffect, useState } from "react";
import { task } from "../../types/Task";
import { Button, Popconfirm, PopconfirmProps, message } from "antd";
function Index() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<task | undefined>(undefined);
  const { tasks, edittask, deleteTask } = taskStore() as {
    tasks: task[];
    edittask: (id: string, task: task) => void;
    deleteTask: (id: string) => void;
  };

  const navigate = useNavigate();
  const getTask = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const task = tasks.find((task: task) => task.id === parseInt(id));
    setData(task);
  };

  useEffect(() => {
    getTask();
  }, []);
  const [tempTitle, setTempTitle] = useState<string>("");
  const [tempDescription, setTempDescription] = useState<string>("");
  const [tempStatus, setTempStatus] = useState<string>("");

  useEffect(() => {
    if (data) {
      setTempTitle(data.title);
      setTempDescription(data.description);
      setTempStatus(data.status);
    }
  }, [data, tasks]);
  const handleUpdate = async () => {
    if (
      tempTitle === data?.title &&
      tempDescription === data?.description &&
      tempStatus === data?.status
    ) {
      message.warning("No changes made");
      return;
    } else {
      console.log(tempTitle, tempDescription, tempStatus);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      edittask(data.id, {
        id: data?.id,
        title: tempTitle,
        description: tempDescription,
        status: tempStatus,
        statusText:
          tempStatus === "Completed"
            ? "Completed"
            : tempStatus === "InProgress"
            ? "In Progress"
            : "Not Started",
        createdAt: data?.createdAt,
      });
      message.success("Task Updated");
      console.log(tasks);
      navigate("/");
    }
  };

  const confirm: PopconfirmProps["onConfirm"] = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    deleteTask(data?.id);
    message.success("Task Deleted");
    navigate("/");
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
    message.error("Task deletion cancelled");
  };

  return (
    <div className="bg-gray-900 w-full h-screen">
      <div className="sm:w-[80%] w-[90%] h-[80%] m-auto">
        {data && (
          <div className="w-full max-w-3xl mx-auto p-6 md:p-8 lg:p-12">
            <div className="bg-gray-950 rounded-lg shadow-lg p-6 md:p-8 lg:p-10 mb-8">
              <div className="grid gap-6 md:gap-8 lg:gap-10">
                <div className="grid gap-3 md:gap-4 lg:gap-5">
                  <label
                    className="text-sm font-medium md:text-base lg:text-lg text-white"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    className=" bg-gray-800 border-gray-700 rounded-md px-4 py-3 text-sm md:text-base lg:text-lg focus:outline-none focus:ring-gray-400 text-white"
                    placeholder="Enter a title"
                    type="text"
                    value={tempTitle}
                    onChange={(e) => setTempTitle(e.target.value)}
                  />
                </div>
                <div className="grid gap-3 md:gap-4 lg:gap-5">
                  <label
                    className="text-sm font-medium md:text-base lg:text-lg text-white"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    className=" bg-gray-800  border-gray-700 rounded-md px-4 py-3 text-sm md:text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-white"
                    id="description"
                    placeholder="Enter a description"
                    rows={4}
                    value={tempDescription}
                    onChange={(e) => setTempDescription(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                  <div className="grid gap-3 md:gap-4 lg:gap-5">
                    <label
                      className="text-sm font-medium md:text-base lg:text-lg  text-white"
                      htmlFor="status"
                    >
                      Status
                    </label>
                    <select
                      className=" bg-gray-800 border-gray-700 rounded-md px-4 py-3 text-sm md:text-base lg:text-lg focus:outline-none focus:ring-2  focus:ring-gray-400 text-white"
                      id="status"
                      value={tempStatus}
                      onChange={(e) => setTempStatus(e.target.value)}
                    >
                      <option value="NotStarted">Not Started</option>
                      <option value="InProgress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button
                      className="bg-gray-500 hover:bg-gray-600 text-white rounded-md px-6 py-3 text-sm md:text-base lg:text-lg font-medium focus:outline-none focus:ring-gray-500 w-full"
                      onClick={handleUpdate}
                    >
                      Save Changes
                    </button>
                  </div>
                  <div>
                    <Popconfirm
                      title="Delete the task"
                      description="Are you sure to delete this task?"
                      onConfirm={confirm}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                      className="flex items-end"
                    >
                      <Button danger>Delete</Button>
                    </Popconfirm>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
