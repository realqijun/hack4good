import React, {useState} from 'react';
import Card from '../components/Card';
import {Box, Button, Fade, Toolbar, Typography} from "@mui/material";
import Topbar from "../components/Topbar";
import sizeConfigs from "../configs/sizeConfig";
import colorConfigs from "../configs/colorConfig";
import Sidebar from "../components/Sidebar";
import {Outlet} from "react-router-dom";
import TemporaryDrawer from "../components/TemporaryDrawer";
import MediaCard from "../components/MediaCard";
import '../App.css'

function MainPage() {
    return (
        <>
            <div>
                <Topbar />
            </div>
            <div className="drawer">
                <TemporaryDrawer/>
            </div>
            <div className="container">
                <div className="item">
                    <MediaCard/>
                </div>
                <div className="item">
                    <MediaCard/>
                </div>
                <div className="item">
                    <MediaCard/>
                </div>
                <div className="item">
                    <MediaCard/>
                </div>
                <div className="item">
                    <MediaCard/>
                </div>
                <div className="item">
                    <MediaCard/>
                </div>
                <div className="item">
                    <MediaCard/>
                </div>

            </div>

            {/*<Box sx={{ display: "flex" }}>*/}
            {/*    <Topbar />*/}
            {/*    <Box*/}
            {/*        component="nav"*/}
            {/*        sx={{*/}
            {/*            width: sizeConfigs.sidebar.width,*/}
            {/*            flexShrink: 0*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <Sidebar />*/}
            {/*    </Box>*/}
            {/*    <Box*/}
            {/*        component="main"*/}
            {/*        sx={{*/}
            {/*            flexGrow: 1,*/}
            {/*            p: 3,*/}
            {/*            width: `calc(100% - ${sizeConfigs.sidebar.width})`,*/}
            {/*            minHeight: "100vh",*/}
            {/*            backgroundColor: colorConfigs.mainBg*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <Toolbar />*/}
            {/*        <Outlet />*/}
            {/*    </Box>*/}
            {/*</Box>*/}
        </>

    );
}

export default MainPage;