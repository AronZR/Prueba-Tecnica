    import { Grid, Typography } from "@mui/material"

    export const HomeView = () => {
    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 2}}
        >
            <Grid item xs={12}>
                <Typography color="white" variant="h5">
                    Nueva Tarea
                </Typography>
            </Grid>
        </Grid>
    )
    }
