import React from 'react';
import Header from './navbar/Header';
import NavigationBar from "./navbar/NavDark";
import NavExtraDark from './navbar/NavExtraDark';
import SideTabs from './navbar/SideTabs';
import RescueForm from './pet/Rescue';
import Padding from './tools/Padding';
import Login from './user/Login';
import Register from './user/Register';
function FreshWebsite() {
    return (
        <>
            <NavExtraDark />
            <Login/>
            
        </>
    )
}
export default FreshWebsite;