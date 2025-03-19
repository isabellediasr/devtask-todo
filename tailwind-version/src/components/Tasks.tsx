import { Task } from "../App";
import { ExternalLink, Trash2 } from "lucide-react";

function Tasks({ tasks }: { tasks: Task[] }) {

   return (
      <div className= "bg-bg-dark p-6 rounded-md">
         <ul className="space-y-3">
            {tasks.map((task) => (
               <li key={task.id} className="flex justify-between gap-2">
                  <button className="bg-bg-light rounded-md p-3 w-full text-left cursor-pointer">
                     {task.title}
                  </button>
                  <button className="bg-bg-light rounded-md p-3 cursor-pointer">
                     <ExternalLink color="#00A089"/>
                     </button>
                  <button className="bg-bg-light rounded-md p-3 cursor-pointer">
                     <Trash2 color="#00A089"/>
                     </button>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Tasks;
