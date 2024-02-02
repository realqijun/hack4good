import LoginPage from "./Pages/LoginPage";
import React from "react";
import MainPage from "./Pages/MainPage";
import {createTheme, ThemeProvider, Toolbar} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { blue, orange } from "@mui/material/colors";
import TemporaryDrawer from "./components/TemporaryDrawer";

const theme = createTheme({
    palette: {
        primary: blue,
        secondary: orange,
    },
});
function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/main" element={<MainPage />}/>
                        <Route path="/test" element={<TemporaryDrawer />}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;