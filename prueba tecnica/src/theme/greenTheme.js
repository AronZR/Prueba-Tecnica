import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const greenTheme = createTheme({
    palette: {
        primary: {
            main: '#29af51'
        },
        secondary: {
            main: '#1ee951'
        },
        error: {
            main: red.A400
        }
    }
})