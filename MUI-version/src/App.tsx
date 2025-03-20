import { Box, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid2";
import Header from "./components/Header";
import Task from "./components/Task";
import "./style.css";

function App() {
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
            <Task />
         </Box>
      </Box>
   );
}

export default App;
