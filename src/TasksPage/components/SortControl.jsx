
  const SortControl = ({ sortBy, setSortBy }) => {
    return (
      <>
        <label htmlFor="sortTasks" className="text-gray-300">Sort By:</label>
        <select
          id="sortTasks"
          className="bg-zinc-800 text-gray-200 p-2 rounded"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="status">Task Status</option>
          <option value="project">Project</option>
          <option value="dueDate">Due Date</option>
          <option value="student">Assigned Student</option>
        </select>
      </>
    );
  };
  
  export default SortControl;
    