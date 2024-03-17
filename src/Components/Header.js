import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../Css/Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <div className='navBar'>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to='/'>Home</Link>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to='/work'>Work</Link>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to='/content'>Content</Link>
                        </Typography>


                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Header;

//roouting single page application
// html anchor<a>  html link
//index.html--->first.html
//hole page render
//rounting we can render the partcular component

// install rounting packages---> npm i react-router-dom

// link,route,BrowserRouter,routes
//1)create a link for all components with using of Link tag in header/navbar/appbar
//2)
//Router----->routes--->route