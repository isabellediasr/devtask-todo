import { Box, List, ListItem, Button } from "@mui/material";
import { ExternalLink, Trash2 } from "lucide-react";

function Task() {
   return (
      <Box
         borderRadius={"0.375rem"}
         sx={{
            backgroundColor: "background.paper",
            marginTop: "1.25rem",
         }}
      >
         <List sx={{}}>
            <ListItem
               sx={{
                  borderRadius: "50px",
                  justifyContent: "space-between",
                  gap:"0.375rem",
                  alignItems: "center",
               }}
            >
               <Button
                  variant="contained"
                  sx={{ bgcolor: "customBackgrounds.primary", width: "80%"}}
               >
                  Title
               </Button>
               <Button
                  variant="contained"
                  sx={{ bgcolor: "customBackgrounds.primary", width: "10%" }}
               >
                  <ExternalLink color="#00A089" />
               </Button>
               <Button
                  variant="contained"
                  sx={{
                     bgcolor: "customBackgrounds.primary",
                     width: "10%",
                     
                  }}
               >
                  <Trash2 color="#00A089" width={"24px"} height={"24px"} />
               </Button>
            </ListItem>
         </List>
      </Box>
   );
}

export default Task;
