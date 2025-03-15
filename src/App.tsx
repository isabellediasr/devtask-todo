import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import tasks from "./data/tasks.json";

   interface Task {
      id: number;
      title: string;
      description: string;
      isCompleted: boolean;
   }

   const task: Task[] = tasks as Task[];

function App() {

   const [task, setTask] = useState<Task[]>(tasks); 

   return (
      <div className="w-screen h-screen bg-[#1c1a1d] font-jetbrains text-white flex flex-col">
         <div>
            <Header />
            <Tasks tasks = {task}/>
            {/* <AddTask /> */}
         </div>
      </div>
   );
}

export default App;

// pesquisa de tarefas