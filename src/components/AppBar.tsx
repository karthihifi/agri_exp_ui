// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Procurement', 'Yield Stats'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;

import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import { FormattedMessage } from "react-intl";
import "react-bootstrap-submenu/dist/index.css";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";

import Tamil from "../lang/ta.json";
import English from "../lang/en.json";

interface Appbarprops {
  handleMassUplModalOpen: () => void;
  setMessages: (locale: any) => void;
}

const ResponsiveAppBar: React.FC<Appbarprops> = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          {/* React-Bootstrap */}
          <AgricultureIcon sx={{ fontSize: 30 }}></AgricultureIcon>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <FormattedMessage id="app.YieldStats"></FormattedMessage>
            </Nav.Link>
            {/* <Nav.Link href="#link">
              <FormattedMessage id="app.Procurement"></FormattedMessage>
            </Nav.Link> */}

            <NavDropdown
              title={<FormattedMessage id="Area.Header"></FormattedMessage>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.2">
                <FormattedMessage id="Area.AreaOverview"></FormattedMessage>
              </NavDropdown.Item>
              <NavDropdown.Item
              // href="/AddIntProduct"
              >
                <Link to="/AddArea" style={{ textDecoration: "none" }}>
                  <FormattedMessage id="Area.AddArea"></FormattedMessage>
                </Link>
                {/* <FormattedMessage id="app.InternalYieldDataAdd"></FormattedMessage> */}
              </NavDropdown.Item>

              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item onClick={props.handleMassUplModalOpen}>
                <FormattedMessage id="app.MassDataUpload"></FormattedMessage>
              </NavDropdown.Item> */}
            </NavDropdown>

            <NavDropdown
              title={
                <FormattedMessage id="app.YieldDataPrep"></FormattedMessage>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
              // href="/AddIntProduct"
              >
                <Link to="/AddIntProduct" style={{ textDecoration: "none" }}>
                  <FormattedMessage id="app.InternalYieldDataAdd"></FormattedMessage>
                </Link>
                {/* <FormattedMessage id="app.InternalYieldDataAdd"></FormattedMessage> */}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <FormattedMessage id="app.ExternalYieldDataAdd"></FormattedMessage>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={props.handleMassUplModalOpen}>
                <FormattedMessage id="app.MassDataUpload"></FormattedMessage>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              title={<FormattedMessage id="app.Language"></FormattedMessage>}
              id="basic-nav-dropdown"
              onSelect={(eve) => {
                if (eve == "ta") {
                  props.setMessages(Tamil);
                } else {
                  props.setMessages(English);
                }
              }}
            >
              <NavDropdown.Item eventKey="en">English</NavDropdown.Item>
              <NavDropdown.Item eventKey="ta">தமிழ்</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveAppBar;
