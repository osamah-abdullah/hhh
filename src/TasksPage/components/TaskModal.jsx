const TaskModal = ({ newTask, setNewTask, onAddTask, onCancel, students, currentUser }) => {
    const fields = [
      ["Project Title", "project"],
      ["Task Name", "name"],
      ["Description", "description"],
      ["Assigned Student", "student"],
      ["Status", "status"],
      ["Due Date", "dueDate"]
    ];
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-10 z-50">
        <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-2xl">
          <h2 className="text-blue-400 text-xl mb-4">Create New Task</h2>
  
          {fields.map(([label, key]) => (
            <div key={key} className="mb-4">
              <label className="block mb-1 font-bold text-gray-300">{label}</label>
  
              {key === "description" ? (
                <textarea
                  className="w-full p-2 bg-zinc-800 text-white rounded"
                  value={newTask[key]}
                  onChange={e => setNewTask({ ...newTask, [key]: e.target.value })}
                />
              ) : key === "status" ? (
                <select
                  className="w-full p-2 bg-zinc-800 text-white rounded"
                  value={newTask[key]}
                  onChange={e => setNewTask({ ...newTask, [key]: e.target.value })}
                >
                  <option value="">Select a status</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                  <option>Pending</option>
                  <option>On Hold</option>
                  <option>Cancelled</option>
                </select>
              ) : key === "student" ? (
                <select
                  className="w-full p-2 bg-zinc-800 text-white rounded"
                  value={newTask[key]}
                  onChange={e => setNewTask({ ...newTask, [key]: e.target.value })}
                  disabled={currentUser.role === "Student"}
                >
                  <option value="">Select Student</option>
                  {students.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={key === "dueDate" ? "date" : "text"}
                  className="w-full p-2 bg-zinc-800 text-white rounded"
                  value={newTask[key]}
                  onChange={e => setNewTask({ ...newTask, [key]: e.target.value })}
                />
              )}
            </div>
          ))}
  
          <button
            className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded"
            onClick={onAddTask}
          >
            Add Task
          </button>
          <button
            className="mt-2 text-red-400 hover:underline text-sm"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };
  
  export default TaskModal;
  