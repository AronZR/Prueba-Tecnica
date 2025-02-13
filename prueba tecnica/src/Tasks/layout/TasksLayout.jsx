import { Box, Toolbar } from "@mui/material"
import { NavBAr } from "../components/NavBAr";
import { SideBar } from "../components/SideBar";


const drawerWidth = 300;



export const TasksLayout = ({children}) => {
  return (
    <Box fullWidth sx={{display: "flex", backgroundColor: 'lightgray', 
      alignContent: 'center', justifyContent: 'center',  width:  `calc(100%)`,
    }}>

        <NavBAr drawerWidth={drawerWidth} />

        <SideBar drawerWidth={drawerWidth} />

        <Box 
            component='main'
            sx={{flexGrow: 1, p: 6, paddingTop: 0, backgroundColor: 'white',
              borderRadius: 5, m: 10, width: '100%'
            }}
        >
            <Toolbar  />

            {children}

        </Box>

    </Box>
  )
}
