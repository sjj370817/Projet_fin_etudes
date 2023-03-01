// import "./NavBar.css"
import DropDownMenu from "./DropDownMenu";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service";

import EventBus from "../../common/EventBus";

/**NavBar avec Material */
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

function NavBar() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  const clientMenus = {
    title: "Clients",
    items: [
      { link: "/clients", title: "Liste" },
      { link: "/newclient", title: "Nouveau" },
      { link: "/findclient", title: "Chercher" },
    ],
  };

  const carMenus = {
    title: "Voitures",
    items: [
      { link: "/cars", title: "Liste" },
      { link: "/newcar", title: "Nouveau" },
      { link: "/findcar", title: "Chercher" },
    ],
  };

  const contractMenus = {
    title: "Contrats",
    items: [
      { link: "/contracts", title: "Liste" },
      { link: "/newcontract", title: "Nouveau" },
      { link: "/findcontract", title: "Chercher" },
    ],
  };

  const invoiceMenus = {
    title: "Factures",
    items: [
      { link: "/invoices", title: "Liste" },
      { link: "/newinvoice", title: "Nouveau" },
      { link: "/findinvoice", title: "Chercher" },
    ],
  };

  const optionMenus = {
    title: "Options",
    items: [
      { link: "/options", title: "Liste" },
      { link: "/newoption", title: "Nouveau" },
      { link: "/findoption", title: "Chercher" },
    ],
  };

  const [showLinks, setShowLinks] = useState(false)

  const handleShowlinks = () => {
    setShowLinks(!showLinks)

  }

  /**NavBar avec Material */
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <header >
      <AppBar position="static">
        <nav className={`navbar  ${showLinks ? "show-nav" : "hide-nav"}`}>
          <div className="navbar-nav mr-auto" style={{display:'none'}}>
            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>
        </nav>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

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
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {currentUser ? (
                      <div className="navbar-nav ml-auto">
                        <ul className="navbar_links">
                          <li>
                            <a href="/home" className="a_item" style={{textDecoration : "none"}}>Home</a>
                          </li>

                          <li className="navbar_item" style={{ cursor: "pointer" }}>
                            <DropDownMenu menu={carMenus} />
                          </li>

                          <li className="navbar_item" style={{ cursor: "pointer" }}>
                            <DropDownMenu menu={clientMenus} />
                          </li>

                          <li className="navbar_item" style={{ cursor: "pointer" }}>
                            <DropDownMenu menu={contractMenus} />
                          </li>

                          <li className="navbar_item" style={{ cursor: "pointer" }}>
                            <DropDownMenu menu={invoiceMenus} />
                          </li>

                          <li className="navbar_item" style={{ cursor: "pointer" }}>
                            <DropDownMenu menu={optionMenus} />
                          </li>

                          <li>
                            <a href="about" className="a_item" style={{textDecoration: "none"}}>About</a>
                          </li>
                        </ul>
                        <div className='navbar_burger' onClick={handleShowlinks}>
                          <span className='burger-bar'></span>
                        </div>
                      </div>
                    ) : (
                      <div className="navbar-nav ml-auto">
                        Bienvenue
                      </div>
                    )}
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'inline-block' }}
              >
                {currentUser ? (
                  <div className="navbar-nav ml-auto">
                    <ul className="navbar_links">
                      <li>
                        <a href="/home" className="a_item">Home</a>
                      </li>

                      <li className="navbar_item" style={{ cursor: "pointer" }}>
                        <DropDownMenu menu={carMenus} />
                      </li>

                      <li className="navbar_item" style={{ cursor: "pointer" }}>
                        <DropDownMenu menu={clientMenus} />
                      </li>


                      <li className="navbar_item" style={{ cursor: "pointer" }}>
                        <DropDownMenu menu={contractMenus} />
                      </li>

                      <li className="navbar_item" style={{ cursor: "pointer" }}>
                        <DropDownMenu menu={invoiceMenus} />
                      </li>

                      <li className="navbar_item" style={{ cursor: "pointer" }}>
                        <DropDownMenu menu={optionMenus} />
                      </li>

                      <li>
                        <a href="about" className="a_item">About</a>
                      </li>
                    </ul>
                    <div className='navbar_burger' onClick={handleShowlinks}>
                      <span className='burger-bar'></span>
                    </div>
                  </div>
                ) : (
                  <div className="navbar-nav ml-auto">
                    Bienvenue
                  </div>
                )}
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    {currentUser ? (
                      <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link to={"/profile"} className="nav-link" style={{ textDecoration: "none", color: "rgb(221, 150, 8)" }}>
                            {currentUser.username}
                          </Link>
                        </li>
                        <li className="nav-item" >
                          <a href="/login" className="nav-link" onClick={logOut} style={{ textDecoration: "none", color: "rgb(221, 150, 8)" }}>
                            LogOut
                          </a>
                        </li>
                      </div>
                    ) : (
                      <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link to={"/login"} className="nav-link" style={{ textDecoration: "none", color: "rgb(221, 150, 8)" }}>
                            Login
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to={"/register"} className="nav-link" style={{ textDecoration: "none", color: "rgb(221, 150, 8)" }}>
                            Sign Up
                          </Link>
                        </li>
                      </div>
                    )}
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header >
  );
}
  export default NavBar;
