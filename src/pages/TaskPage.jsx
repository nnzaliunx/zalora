import TaskCard from "../components/Task/TaskCard";

const TaskPage = ({ token }) => {
  console.log(handleDataFromChild);
  return (
    <div className="max-w-2xl mx-auto  pt-20  bg-white text-black">
      <TaskCard token={token} sendDataToParent={handleDataFromChild} />
    </div>
  );
};

export default TaskPage;
