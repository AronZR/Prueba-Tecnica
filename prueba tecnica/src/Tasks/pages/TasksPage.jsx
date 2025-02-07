import { IconButton, Typography } from "@mui/material"
import { TasksLayout } from "../layout/TasksLayout"
import { HomeView } from "../views/HomeView"
import { TaskView } from "../views/TaskView"

export const TasksPage = () => {
  return (
    <TasksLayout>

      {/* <HomeView /> */}

      <TaskView />

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.8},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <Typography> + </Typography>
      </IconButton>

    </TasksLayout>
  )
}
