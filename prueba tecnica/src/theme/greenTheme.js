import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const greenTheme = createTheme({
    palette: {
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#1ee951'
        },
        error: {
            main: red.A400
        }
    }
})