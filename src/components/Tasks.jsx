import { Check, ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({ tasks, onDeleteTaskClick, onTaskClick }) {
  return (
    <ul className="space-y-4 p-6 rounded-md shadow bg-slate-200">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-white p-2 rounded-md w-full text-left ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 text-white p-2 rounded-md">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 text-white p-2 rounded-md"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
