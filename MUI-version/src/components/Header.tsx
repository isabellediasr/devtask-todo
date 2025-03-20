import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { LaptopMinimalCheck } from "lucide-react";

function Header() {
   return (
      <>
         <Box
            sx={{
               color: 'text.primary',
            }}
         >
            <Grid
               container
               spacing={2}
               sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  pt: "1.25rem",
               }}
            >
               <LaptopMinimalCheck color="#3e9392" size={45}/>
               <Typography
               sx={{
                  fontSize: "1.875rem",
                  fontWeight: "fontWeightBold",
               }}
               >
                  Dev
                  <Typography
                     sx={{
                        display: "inline",
                        color: "primary.main",
                        fontSize: "1.875rem",
                        fontWeight: "bold"
                     }}
                  >
                     Task
                  </Typography>
               </Typography>
            </Grid>
         </Box>
      </>
   );
}

export default Header;
