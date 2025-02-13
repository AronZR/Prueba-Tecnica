import { Button, Divider, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useTaskStore } from "../../hooks/useTaskStore";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";

const  taskFields = {
    tarea: '',
    descripcion: ''
}

export const TaskView = () => {
    const [estado, setEstado] = useState('');
    const {startCreatingTask, deleteTask, activeTask} = useTaskStore();
    const {tarea, descripcion, onInputChange, setFormData, onResetForm} = useForm(taskFields);

    const createTask = (event) => {
        event.preventDefault();
        if (activeTask?.id) {
            startCreatingTask({tarea: tarea, descripcion: descripcion, estatus: estado, id: activeTask.id});
        }else {
            startCreatingTask({tarea: tarea, descripcion: descripcion, estatus: estado});
        }
  
      }

    const handleChange = (event) => {
        setEstado(event.target.value);
    };

    const handleDelete = () => {
        deleteTask(activeTask);
    }



    useEffect(() => {
        if(activeTask?.id) {
            setEstado(activeTask.estatus);
            setFormData(activeTask.tarea, activeTask.descripcion);
        } else {
            onResetForm();
            setEstado('');
        }
        
    }, [activeTask]);

    

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid container>
            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese titulo"
                label='Titulo'
                sx={{mb: 1}}
                name="tarea"
                value={tarea}
                onChange={onInputChange}
            />
            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="Descripción"
                minRows={5}
                name="descripcion"
                value={descripcion}
                onChange={onInputChange}
            />
            <Grid item sx={{mt: 3, width: 150}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" >Estado</InputLabel>
                    <Select
                    color="inherit"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={estado}
                    label="Estado"
                    onChange={handleChange}
                    >
                        <MenuItem value='Por hacer'>Por hacer</MenuItem>
                        <MenuItem value='En proceso'>En proceso</MenuItem>
                        <MenuItem value='Finalizado'>Finalizado</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
        <Divider />
        <Grid item>
            <Button onClick={createTask}  sx={{padding: 2}}>
                <Typography fontSize={13}>Guardar</Typography>
            </Button>
        </Grid>

        {   (estado !== '')
            ?(<Grid>
                <Button onClick={handleDelete} color="error" sx={{padding: 2}}>
                    <Typography fontSize={13}>Eliminar</Typography>
                </Button>
            </Grid>)
            : ''
        }
    </Grid>
  );
}
