import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import tasksData from "./data/tasksData.json";

export interface Task {
   id: number;
   title: string;
   description: string;
   isCompleted: boolean;
}

   const task: Task[] = tasksData as Task[];

function App() {

   const [tasks, setTasks] = useState<Task[]>(task); 

   return (
      <div className="w-screen h-screen bg-bg-main font-jetbrains text-white flex justify-center">
         <div className="w-[50%]">
            <Header />
            <Tasks tasks = {tasks}/>
            {/* <AddTask /> */}
         </div>
      </div>
   );
}

export default App;

// pesquisa de tarefas