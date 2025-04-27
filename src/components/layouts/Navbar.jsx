import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Container,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handling the opening of the mobile menu

  // Handling the closing of the mobile menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Toggle mobile menu on/off
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menus = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Career", to: "/career" },
  ]

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", padding: "0.5rem 0" }}>
          {/* Logo */}
          <Box sx={{ flexGrow: 1 }}>
            <Link
              to="/"
              style={{
                color: "orange",
                fontWeight: "bold",
                fontSize: "24px",
                textDecoration: "none",
              }}
            >
              Logo
            </Link>
          </Box>

          {/* Desktop Navbar */}
          <Box
            sx={{
              display: { xs: "none", md: "flex", gap: "1rem" },
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 2,
            }}
          >

            {
              menus.map((menu, index) => (
                <NavLink
                  key={index}
                  to={menu.to}
                  className={({ isActive }) =>
                    isActive ? "active-item" : "nav-link"
                  }
                >
                  {menu.label}
                </NavLink>
              ))
            }
           
          </Box>

          {/* CTA Buttons (Right-aligned, only visible on md and up) */}
          <Box
            sx={{ display: { xs: "none", md: "flex", gap: "1rem" }, alignItems: "center" }}
          >
            <NavLink to="/signin" className="signin-button">
              Sign In
            </NavLink>
            <NavLink to="/contact" className="contact-button">
              Contact Us
            </NavLink>
          </Box>

          {/* Mobile Menu (Hamburger) */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "black" }}
            edge="end"
            onClick={toggleMobileMenu}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Menu Dropdown */}
          <Menu
            anchorEl={anchorEl}
            open={mobileMenuOpen}
            onClose={toggleMobileMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <NavLink
                to="/home"
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                Home
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavLink
                to="/about"
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                About Us
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavLink
                to="/career"
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                Career
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavLink
                to="/signin"
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                Sign In
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavLink
                to="/contact"
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                Contact Us
              </NavLink>
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
