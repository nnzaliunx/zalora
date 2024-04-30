import TaskCard from "../components/Task/TaskCard";

const TaskPage = ({ token, balance, frozen }) => {
  return (
    <div className="max-w-2xl mx-auto  pt-20  bg-white text-black">
      <TaskCard token={token} balance={balance} frozen={frozen} />
    </div>
  );
};

export default TaskPage;
