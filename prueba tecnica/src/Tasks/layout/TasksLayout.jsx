import { Box, Toolbar } from "@mui/material"
import { NavBAr } from "../components/NavBAr";
import { SideBar } from "../components/SideBar";


const drawerWidth = 400;



export const TasksLayout = ({children}) => {
  return (
    <Box sx={{display: "flex"}}>

        <NavBAr drawerWidth={drawerWidth}/>

        <SideBar drawerWidth={drawerWidth}/>

        <Box 
            component='main'
            sx={{flexGrow: 1, p: 3}}
        >
            <Toolbar  />

            {children}

        </Box>

    </Box>
  )
}
