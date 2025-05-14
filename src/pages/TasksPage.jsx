// TasksPage.jsx
import { useEffect, useState } from "react";
import TaskModal from "./components/TaskModal";
import TaskTable from "./components/TaskTable";
import SortControl from "./components/SortControl";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({
    project: "",
    name: "",
    description: "",
    student: "",
    status: "",
    dueDate: ""
  });
  const [currentUser, setCurrentUser] = useState({});
  const [students, setStudents] = useState([]);
  const [sortBy, setSortBy] = useState("status");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser")) || {};
    setCurrentUser(user);
    const allStudents = JSON.parse(localStorage.getItem("students")) || [];
    const formattedStudents = allStudents.map(s => typeof s === "object" ? s.username : s);
    setStudents([
      ...new Set([
        ...formattedStudents,
        "Ali Yaseen", "Braa Aeesh", "Ibn Al-Jawzee", "Ibn Malik",
        "Ayman Outom", "Salah Salah", "Yahya Leader", "Salam Kareem",
        "Isaac Nasir", "Saeed Salam"
      ])
    ]);
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    const isTeacher = currentUser.role === "Teacher";
    const result = tasks.filter(task =>
      isTeacher ? task.createdBy === currentUser.username : task.student === currentUser.username
    );
    setFilteredTasks(result);
  }, [tasks, currentUser]);

  const handleAddTask = () => {
    if (Object.values(newTask).some(val => !val)) {
      alert("⚠️ Please fill in all fields before adding the task!");
      return;
    }

    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    const task = {
      ...newTask,
      id: newId,
      studentNumber: "N/A",
      createdBy: currentUser.role === "Student" ? "tasbeeh" : currentUser.username
    };

    const updatedTasks = [...tasks, task];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
    setShowModal(false);
    setNewTask({ project: "", name: "", description: "", student: "", status: "", dueDate: "" });
  };

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === "dueDate") return new Date(a.dueDate) - new Date(b.dueDate);
    return a[sortBy]?.localeCompare(b[sortBy]);
  });

  return (
    <section className="p-5 text-white">
      <div className="flex items-center gap-4 mb-6">
        <SortControl sortBy={sortBy} setSortBy={setSortBy} />
        <button
          className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          onClick={() => setShowModal(true)}
        >
          Create a New Task
        </button>
      </div>

      {showModal && (
        <TaskModal
          newTask={newTask}
          setNewTask={setNewTask}
          onAddTask={handleAddTask}
          onCancel={() => setShowModal(false)}
          students={students}
          currentUser={currentUser}
        />
      )}

      <TaskTable tasks={sortedTasks} />

      <div className="mt-4 text-gray-300">
        Total Tasks: <span>{filteredTasks.length}</span>
      </div>
    </section>
  );
};

export default TasksPage;
