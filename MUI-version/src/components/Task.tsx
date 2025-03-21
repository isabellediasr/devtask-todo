import { Box, List, ListItem, Button } from "@mui/material";
import { ExternalLink, Trash2 } from "lucide-react";

function Task({tasks, onTaskClick}) {
   return (
      <Box
         borderRadius={"0.375rem"}
         sx={{
            backgroundColor: "background.paper",
            marginTop: "1.25rem",
         }}
      >
         <List 
            sx={{
               padding: "24px",
               display: "flex",
               flexDirection: "column",
               gap: "12px"
            }}
         >
            {tasks.map((task) => (
            <ListItem
               key={task.id}
               sx={{
                  borderRadius: "50px",
                  justifyContent: "space-between",
                  gap: "0.5rem",
                  alignItems: "center"
               }}
            >
               <Button
                  fullWidth
                  variant="contained"
                  onClick={onTaskClick}
                  sx={{
                     bgcolor: "customBackgrounds.primary",
                     padding: "12px",
                     justifyContent: "flex-start",
                     fontSize: "16px",
                     height: "48px"
                  }}
               >
                  {task.title}
               </Button>
               <Button
                  variant="contained"
                  sx={{ 
                     bgcolor: "customBackgrounds.primary",
                     padding: "12px"
                  }}
               >
                  <ExternalLink color="#00A089" />
               </Button>
               <Button
                  variant="contained"
                  sx={{
                     bgcolor: "customBackgrounds.primary",
                     padding: "12px"
                  }}
               >
                  <Trash2 color="#00A089" width={"24px"} height={"24px"} />
               </Button>
            </ListItem>))}
         </List>
      </Box>
   );
}

export default Task;
