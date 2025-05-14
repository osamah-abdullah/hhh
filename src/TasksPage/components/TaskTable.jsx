const getStatusColor = (status) => {
    switch (status) {
      case "In Progress": return "text-green-500";
      case "Completed": return "text-blue-500";
      case "Pending": return "text-yellow-500";
      case "On Hold": return "text-amber-600";
      case "Cancelled": return "text-red-500";
      default: return "text-black";
    }
  };
  
  const TaskTable = ({ tasks }) => {
    const columns = [
      "Task ID", "Project", "Task Name", "Description",
      "Assigned Student", "Status", "Due Date"
    ];
  
    return (
      <table className="w-full text-left border-collapse shadow-lg rounded overflow-hidden">
        <thead className="bg-zinc-800">
          <tr>
            {columns.map(col => (
              <th key={col} className="p-3 text-white">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id} className="border-b border-zinc-700">
              <td className="p-3">{task.id}</td>
              <td className="p-3">{task.project}</td>
              <td className="p-3">{task.name}</td>
              <td className="p-3">{task.description}</td>
              <td className="p-3">{task.student}</td>
              <td className={`p-3 font-bold ${getStatusColor(task.status)}`}>{task.status}</td>
              <td className="p-3">{task.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default TaskTable;
  