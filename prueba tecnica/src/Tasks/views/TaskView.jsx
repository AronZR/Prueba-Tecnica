import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useState } from "react";

export const TaskView = () => {
    const [estado, setEstado] = useState('');

    const handleChange = (event) => {
        setEstado(event.target.value);
    };
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mmb: 1}}>
        <Grid item>
            <Typography fontSize={30} fontWeight='light'>fecha fecha fecha</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{padding: 2}}>
                <Typography fontSize={13}>Guardar</Typography>
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese titulo"
                label='Titulo'
                sx={{mb: 1}}
            />
            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="Descripción"
                minRows={5}
            />
        </Grid>
        <Grid item sx={{mt: 3, width: 150}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" >Estado</InputLabel>
                <Select
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
  )
}
