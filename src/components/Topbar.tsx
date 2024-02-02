import {AppBar, Toolbar, Typography} from "@mui/material";
import sizeConfigs from "../configs/sizeConfig";
import colorConfigs from "../configs/colorConfig";
import TemporaryDrawer from "./TemporaryDrawer";

function Topbar() {
    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${sizeConfigs.sidebar.width}`,
                    ml: sizeConfigs.sidebar.width,
                    boxShadow: "unset",
                    backgroundColor: colorConfigs.topbar.bg,
                    color: colorConfigs.topbar.color
                }}
                >
            <Toolbar>
                <Typography>
                    WElcome to chinatown
                </Typography>
            </Toolbar>
            </AppBar>
        </div>
    );
}

export default Topbar;