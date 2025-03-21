import { Box, Typography } from "@mui/material";
import Header from "./components/Header";
import Task from "./components/Task";
import "./style.css";
import { useState } from "react";
import tasksData from "./data/tasksData.json"
// import Grid from "@mui/material/Grid2";

export interface Task {
   id: number;
   title: string;
   description: string;
   isCompleted: boolean;
}

const task: Task[] = tasksData as Task[];


function App() {
   const [tasks, setTasks] = useState<Task[]>(task);

   function onTaskClick(taskId: number) {
      const newTasks = task.map((task) => {
         if (taskId === task.id) {
            const update = {...task, isCompleted: !task.isCompleted, }
            console.log(`&{task.isCompleted}`)
            console.log(`isCompleted atualizado: ${update.isCompleted}`);
            return update;  
            // return {...task, isCompleted: !task.isCompleted, };
         } else {
            return task;
         }
      });
      setTasks(newTasks)
   }

   return (
      <Box
         sx={{
            display: "flex",
            justifyContent: "center",
            minHeight: "100vh",
            backgroundColor: "background.default"
         }}
      >
         <Box
         sx={{
            width: "50%",
         }}
         >
            <Header />
            <Task 
               tasks = {tasks}
               onTaskClick = {onTaskClick}
            />
         </Box>
      </Box>
   );
}

export default App;
