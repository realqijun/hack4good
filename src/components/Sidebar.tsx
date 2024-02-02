import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import colorConfigs from "../configs/colorConfig";
import sizeConfigs from "../configs/sizeConfig";

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: sizeConfigs.sidebar.width,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: sizeConfigs.sidebar.width,
                    boxSizing: "border-box",
                    borderRight: "0px",
                    backgroundColor: colorConfigs.sidebar.bg,
                    color: colorConfigs.sidebar.color
                }
            }}
        >
            <List disablePadding>
                <Toolbar sx={{ marginBottom: "20px" }}>
                    <Stack
                        sx={{ width: "100%" }}
                        direction="row"
                        justifyContent="center"
                    >
                        {/*<Avatar src={assets.images.logo} />*/}
                    </Stack>
                </Toolbar>
                {/*{appRoutes.map((route, index) => (*/}
                {/*    route.sidebarProps ? (*/}
                {/*        route.child ? (*/}
                {/*            <SidebarItemCollapse item={route} key={index} />*/}
                {/*        ) : (*/}
                {/*            <SidebarItem item={route} key={index} />*/}
                {/*        )*/}
                {/*    ) : null*/}
                {/*))}*/}
            </List>
        </Drawer>
    );
};

export default Sidebar;