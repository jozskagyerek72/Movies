import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Outlet, NavLink } from 'react-router-dom';
import MovieIcon from '@mui/icons-material/Movie';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';

const pages = [
    { path: "/", name: "Trending" },
    { path: "/movies", name: "Movies" },
    { path: "/series", name: "TV Series" },
    { path: "/search", name: "Search" }
];


export const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



    return (
        <>
            <AppBar position="static" sx={{bgcolor:"#512da8"}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <MovieFilterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        {/**mobil nezet */}

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((item) => (
                                    <NavLink key={item.name} to={item.path}>
                                        <MenuItem key={item.name} onClick={handleCloseNavMenu}>
                                            <Typography sx={{ textAlign: 'center' }}>{item.name}</Typography>
                                        </MenuItem>
                                    </NavLink>
                                ))}
                            </Menu>
                        </Box>
                        <MovieFilterIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        {/**laptop menu */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    <Button
                                        key={item.name}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {item.name}
                                    </Button>
                                </NavLink>
                            ))}
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet />
        </>
    );
}

