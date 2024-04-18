import TaskCard from "../components/Task/TaskCard";

const TaskPage = ({ token }) => {
  return (
    <div className="max-w-2xl mx-auto  pt-20  bg-white text-black">
      <TaskCard token={token} />
    </div>
  );
};

export default TaskPage;
