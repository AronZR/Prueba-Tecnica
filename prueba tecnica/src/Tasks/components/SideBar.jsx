import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
    >
        <Drawer
            variant="permanent"
            open
            sx={{
                display: {xs: 'block'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div' >
                    User
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['uno', 'dos', 'tres', 'cuatro'].map(text => (
                        
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <Grid container>
                                    <ListItemText primary={ text } />
                                    <ListItemText secondary='lorem5' />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>
    </Box>
  )
}
