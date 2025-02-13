import { Box, Divider, Drawer, FormControl, Grid, InputLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Select, TextField, Toolbar, Typography } from "@mui/material"
import { useAuthStore } from "../../hooks/useAuthStore"
import { useTaskStore } from "../../hooks/useTaskStore";

import { useEffect, useState } from "react";

export const SideBar = ({drawerWidth = 240}) => {

    const {user} =useAuthStore();
    const {tasks, getTasks, startSetActiveTask} = useTaskStore()
    const [estado, setEstado] = useState('');
    const [taskCopy, setTaskCopy] = useState(tasks);


    const onFilterByTask = (event) => {
        console.log(event.target.value);
        const taskFiltered = tasks.map((task) => {
            if (task.tarea.includes(event.target.value)){
                return task
            }
        }).filter((task) => task !== undefined);
        setTaskCopy(taskFiltered);
    }

    
    const handleChange = (event) => {
        setEstado(event.target.value);
        const estatusFiltered = tasks.map((task) => {
            if (task.estatus.includes(event.target.value)){
                return task
            }
        }).filter((task) => task !== undefined);
        setTaskCopy(estatusFiltered);
    };


    const onHandleTask = (data) => {
        startSetActiveTask(data)
    } 

    const getTasksData = async() => {
        await getTasks();
    }

    useEffect(() => {
        setTaskCopy(tasks)
    }, [tasks])
    

    useEffect(() => {
      getTasksData();
    }, []);
    
    
  return (
    <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0} }}
    >
        <Drawer
            variant="permanent"
            open
            sx={{
                backgroundColor: 'red',
                display: {xs: 'block'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}
            color='red'
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div' >
                    {user.name}
                </Typography>
            </Toolbar>
            <Divider />

            <TextField sx={{padding: 3}} placeholder="buscar"
                onChange={onFilterByTask}
            ></TextField>
            <FormControl sx={{width: 250, ml: 3}}>
                <InputLabel id="demo-simple-select-label" >Estado</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={estado}
                label="Estado"
                onChange={handleChange}
                >
                    <MenuItem value=''></MenuItem>
                    <MenuItem value='Por hacer'>Por hacer</MenuItem>
                    <MenuItem value='En proceso'>En proceso</MenuItem>
                    <MenuItem value='Finalizado'>Finalizado</MenuItem>
                </Select>
            </FormControl>
            <List>
                {
                    taskCopy.map(task => (
                        
                        <ListItem key={task.id} disablePadding>
                            <ListItemButton onClick={() => onHandleTask(task)}
                                sx={{
                                    backgroundColor: "secondary",
                                    borderBottom: '1px solid lightGrey'
                                }}
                            >
                                <Grid container>
                                    <ListItemText primary={ task.tarea } />                                
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
