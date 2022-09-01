import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { colorTheme } from './colorTheme';

export const AppTheme = ({children}) => {
    return(
        <ThemeProvider theme={colorTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}