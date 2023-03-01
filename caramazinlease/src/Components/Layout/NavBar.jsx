// import "./NavBar.css"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service";
import "./NavBar.css";

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
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';

/**Menu* */

import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

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
          <div className="navbar-nav mr-auto" style={{ display: 'none' }}>
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
            <DirectionsCarFilledOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
              CARAMAZINLEASE
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
                        <ul className="navbar_links" style={{ paddingLeft: "0" }}>
                          <li>
                            <PopupState variant="" popupId="demo-popup-menu">
                              {(popupState) => (
                                <React.Fragment>
                                  <Button variant="" {...bindTrigger(popupState)}>
                                    <a href="/home" style={{ color: "#1976d2", textDecoration: "none" }}>Home</a>
                                  </Button>
                                </React.Fragment>
                              )}
                            </PopupState>
                          </li>

                          <li className="navbar_item" style={{ cursor: "pointer" }}>
                            <PopupState variant="popover" popupId="demo-popup-menu">
                              {(popupState) => (
                                <React.Fragment>
                                  <Button variant="" {...bindTrigger(popupState)} style={{ color: "#1976d2"}}>
                                    Voitures
                                  </Button>
                                  <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}><a href="/cars" style={{ color: "#1976d2", textDecoration: "none" }} >Liste</a></MenuItem>
                                    <MenuItem onClick={popupState.close}><a href="/newcar" style={{ color: "#1976d2", textDecoration: "none" }}>Nouveau</a></MenuItem>
                                    <MenuItem onClick={popupState.close}><a href="/findcar" style={{ color: "#1976d2", textDecoration: "none" }}>Chercher</a></MenuItem>
                                  </Menu>
                                </React.Fragment>
                              )}
                            </PopupState>
                          </li>

                          <li className="navbar_item" style={{ cursor: "pointer" }}>
                            <PopupState variant="popover" popupId="demo-popup-menu">
                              {(popupState) => (
                                <React.Fragment>
                                  <Button variant="" {...bindTrigger(popupState)} style={{ color: "#1976d2"}}>
                                    Clients
                                  </Button>
                                  <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}><a href="/clients" style={{ color: "#1976d2", textDecoration: "none" }} >Liste</a></MenuItem>
                                    <MenuItem onClick={popupState.close}><a href="/newclient" style={{ color: "#1976d2", textDecoration: "none" }}>Nouveau</a></MenuItem>
                                    <MenuItem onClick={popupState.close}><a href="/findclient" style={{ color: "#1976d2", textDecoration: "none" }}>Chercher</a></MenuItem>
                                  </Menu>
                                </React.Fragment>
                              )}
                            </PopupState>
                          </li>

                          <li className="navbar_item" style={{ cursor: "pointer" }}>
                            <PopupState variant="popover" popupId="demo-popup-menu">
                              {(popupState) => (
                                <React.Fragment>
                                  <Button variant="" {...bindTrigger(popupState)} style={{ color: "#1976d2"}}>
                                    Contrats
                                  </Button>
                                  <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}><a href="/contracts" style={{ color: "#1976d2", textDecoration: "none" }} >Liste</a></MenuItem>
                                    <MenuItem onClick={popupState.close}><a href="/newcontract" style={{ color: "#1976d2", textDecoration: "none" }}>Nouveau</a></MenuItem>
                                    <MenuItem onClick={popupState.close}><a href="/findcontract" style={{ color: "#1976d2", textDecoration: "none" }}>Chercher</a></MenuItem>
                                  </Menu>
                                </React.Fragment>
                              )}
                            </PopupState>
                          </li>

                          <li className="navbar_item" style={{ cursor: "pointer" }}>
                            <PopupState variant="popover" popupId="demo-popup-menu">
                              {(popupState) => (
                                <React.Fragment>
                                  <Button variant="" {...bindTrigger(popupState)} style={{ color: "#1976d2"}}>
                                    Factures
                                  </Button>
                                  <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}><a href="/invoices" style={{ color: "#1976d2", textDecoration: "none" }} >Liste</a></MenuItem>
                                    <MenuItem onClick={popupState.close}><a href="/newinvoice" style={{ color: "#1976d2", textDecoration: "none" }}>Nouveau</a></MenuItem>
                                    <MenuItem onClick={popupState.close}><a href="/findinvoice" style={{ color: "#1976d2", textDecoration: "none" }}>Chercher</a></MenuItem>
                                  </Menu>
                                </React.Fragment>
                              )}
                            </PopupState>
                          </li>

                          <li className="navbar_item" style={{ cursor: "pointer" }}>
                            <PopupState variant="popover" popupId="demo-popup-menu">
                              {(popupState) => (
                                <React.Fragment>
                                  <Button variant="" {...bindTrigger(popupState)} style={{ color: "#1976d2"}}>
                                    Options
                                  </Button>
                                  <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}><a href="/options" style={{ color: "#1976d2", textDecoration: "none" }} >Liste</a></MenuItem>
                                    <MenuItem onClick={popupState.close}><a href="/newoption" style={{ color: "#1976d2", textDecoration: "none" }}>Nouveau</a></MenuItem>
                                    <MenuItem onClick={popupState.close}><a href="/findoption" style={{ color: "#1976d2", textDecoration: "none" }}>Chercher</a></MenuItem>
                                  </Menu>
                                </React.Fragment>
                              )}
                            </PopupState>
                          </li>

                          <li>
                            <PopupState variant="" popupId="demo-popup-menu">
                              {(popupState) => (
                                <React.Fragment>
                                  <Button variant="" {...bindTrigger(popupState)}>
                                    <a href="/about" style={{ color: "#1976d2", textDecoration: "none" }}>About</a>
                                  </Button>
                                </React.Fragment>
                              )}
                            </PopupState>
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
            <DirectionsCarFilledOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
              CARAMAZINLEASE
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <div
                className="menu"
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', display: 'block' }}
              >
                {currentUser ? (
                  <ul style={{ paddingLeft: "0", marginBottom: '0' }}>
                    <li>
                      <PopupState variant="" popupId="demo-popup-menu">
                        {(popupState) => (
                          <React.Fragment>
                            <Button variant="" {...bindTrigger(popupState)}>
                              <a href="/home" style={{ color: "white", textDecoration: "none" }}>Home</a>
                            </Button>
                          </React.Fragment>
                        )}
                      </PopupState>
                    </li>

                    <li className="navbar_item" style={{ cursor: "pointer" }}>
                      <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                          <React.Fragment>
                            <Button variant="" {...bindTrigger(popupState)}>
                              Voitures
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                              <MenuItem onClick={popupState.close}><a href="/cars" style={{ color: "#1976d2", textDecoration: "none" }} >Liste</a></MenuItem>
                              <MenuItem onClick={popupState.close}><a href="/newcar" style={{ color: "#1976d2", textDecoration: "none" }}>Nouveau</a></MenuItem>
                              <MenuItem onClick={popupState.close}><a href="/findcar" style={{ color: "#1976d2", textDecoration: "none" }}>Chercher</a></MenuItem>
                            </Menu>
                          </React.Fragment>
                        )}
                      </PopupState>
                    </li>

                    <li className="navbar_item" style={{ cursor: "pointer" }}>
                      <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                          <React.Fragment>
                            <Button variant="" {...bindTrigger(popupState)}>
                              Clients
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                              <MenuItem onClick={popupState.close}><a href="/clients" style={{ color: "#1976d2", textDecoration: "none" }} >Liste</a></MenuItem>
                              <MenuItem onClick={popupState.close}><a href="/newclient" style={{ color: "#1976d2", textDecoration: "none" }}>Nouveau</a></MenuItem>
                              <MenuItem onClick={popupState.close}><a href="/findclient" style={{ color: "#1976d2", textDecoration: "none" }}>Chercher</a></MenuItem>
                            </Menu>
                          </React.Fragment>
                        )}
                      </PopupState>
                    </li>


                    <li className="navbar_item" style={{ cursor: "pointer" }}>
                      <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                          <React.Fragment>
                            <Button variant="" {...bindTrigger(popupState)}>
                              Contrats
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                              <MenuItem onClick={popupState.close}><a href="/contracts" style={{ color: "#1976d2", textDecoration: "none" }} >Liste</a></MenuItem>
                              <MenuItem onClick={popupState.close}><a href="/newcontract" style={{ color: "#1976d2", textDecoration: "none" }}>Nouveau</a></MenuItem>
                              <MenuItem onClick={popupState.close}><a href="/findcontract" style={{ color: "#1976d2", textDecoration: "none" }}>Chercher</a></MenuItem>
                            </Menu>
                          </React.Fragment>
                        )}
                      </PopupState>
                    </li>

                    <li className="navbar_item" style={{ cursor: "pointer" }}>
                      <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                          <React.Fragment>
                            <Button variant="" {...bindTrigger(popupState)}>
                              Factures
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                              <MenuItem onClick={popupState.close}><a href="/invoices" style={{ color: "#1976d2", textDecoration: "none" }} >Liste</a></MenuItem>
                              <MenuItem onClick={popupState.close}><a href="/newinvoice" style={{ color: "#1976d2", textDecoration: "none" }}>Nouveau</a></MenuItem>
                              <MenuItem onClick={popupState.close}><a href="/findinvoice" style={{ color: "#1976d2", textDecoration: "none" }}>Chercher</a></MenuItem>
                            </Menu>
                          </React.Fragment>
                        )}
                      </PopupState>
                    </li>

                    <li className="navbar_item" style={{ cursor: "pointer" }}>
                      <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                          <React.Fragment>
                            <Button variant="" {...bindTrigger(popupState)}>
                              Options
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                              <MenuItem onClick={popupState.close}><a href="/options" style={{ color: "#1976d2", textDecoration: "none" }} >Liste</a></MenuItem>
                              <MenuItem onClick={popupState.close}><a href="/newoption" style={{ color: "#1976d2", textDecoration: "none" }}>Nouveau</a></MenuItem>
                              <MenuItem onClick={popupState.close}><a href="/findoption" style={{ color: "#1976d2", textDecoration: "none" }}>Chercher</a></MenuItem>
                            </Menu>
                          </React.Fragment>
                        )}
                      </PopupState>
                    </li>

                    <li>
                      <PopupState variant="" popupId="demo-popup-menu">
                        {(popupState) => (
                          <React.Fragment>
                            <Button variant="" {...bindTrigger(popupState)}>
                              <a href="/about" style={{ color: "white", textDecoration: "none" }}>About</a>
                            </Button>
                          </React.Fragment>
                        )}
                      </PopupState>
                    </li>
                  </ul>
                ) : (
                  <div className="navbar-nav ml-auto">
                    Caramazinlease plateforme
                  </div>
                )}
              </div>
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
