import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useAuthStore } from "../../hooks/useAuthStore"

export const NavBAr = ({drawerWidth = 240}) => {

    const {startLogout} = useAuthStore(); 



  return (
    <AppBar 
        position="fixed"
        sx={{
            width: {sm: `calc(100% - ${drawerWidth}px)`}
        }}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                edge='start'
                sx={{mr: 2, display: {sm: "none"}}}
                fontSize={20}
            >
                Menu
            </IconButton>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'> 
                <Typography variant="h6" noWrap component='div' fontSize={30}>Tareasss</Typography>
                <IconButton onClick={startLogout} color="error">
                    Salir
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
