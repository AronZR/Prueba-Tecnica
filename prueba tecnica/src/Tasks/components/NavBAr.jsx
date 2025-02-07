import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const NavBAr = ({drawerWidth = 240}) => {
  return (
    <AppBar 
        position="fixed"
        sx={{
            width: {sm: `calc(100% - ${drawerWidth}px)`},
            ml: { sm: `${ drawerWidth }px` }
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
                <IconButton color="error">
                    Salir
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
