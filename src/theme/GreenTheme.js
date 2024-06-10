import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const GreenTheme = createTheme({
    palette: {
        primary: {
            main: '#72BB53'
        },
        secondary: {
            main: '#337C14'
        },
        pink: {
            main: '#F85F6A'
        },
        error: {
            main: red.A400
        }
    }
})