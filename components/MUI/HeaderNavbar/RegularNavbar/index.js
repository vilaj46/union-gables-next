import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import styled from "styled-components";

// Components
import Logo from "../../Logo";
import Dropdown from "./Dropdown";

import device from "../../../../styles/device";

const LinksContainer = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`;

const ResponsiveAppBar = ({ links, LinkComponent }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [hovering, setHovering] = React.useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: "0",
        backgroundColor: "#AA4465",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Logo LinkComponent={LinkComponent} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
            <Logo LinkComponent={LinkComponent} />

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {links.map((link) => (
                <MenuItem
                  key={link.href + link.label}
                  sx={{
                    backgroundColor: `${
                      link.label === "Book Now" ? "#AA4465" : "#fffff"
                    }`,
                  }}
                >
                  <ListItemText
                    sx={{
                      color: "#333",
                      textDecoration: "none",
                    }}
                  >
                    <Link href={link.href}>
                      <a
                        style={{
                          color: "#333",
                          textDecoration: "none",
                        }}
                      >
                        {link.label}
                      </a>
                    </Link>
                  </ListItemText>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LinksContainer>
            {links.map((link) => (
              <Dropdown
                link={link}
                LinkComponent={LinkComponent}
                hovering={hovering}
                setHovering={setHovering}
                key={link.label + link.href}
              />
            ))}
          </LinksContainer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
