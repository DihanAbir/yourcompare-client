import React from "react";

import {
  Container,
  Box,
  List,
  Toolbar,
  AppBar,
  Typography,
  Button,
  Drawer,
  Hidden,
  ListItem,
  Paper,
  ListItemButton,
} from "@mui/material";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";

import { style, styled } from "@mui/system";
import logo from "../../../accets/logo.png";
import profile from "../../../accets/profile.jpg";
import { Link, useLocation } from "react-router-dom";

// mui and react icons
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { FiLogOut } from "react-icons/fi";
import { ImProfile } from "react-icons/im";

//components
import ProductsMenu from "./ProductsMenu";
import MenuItems from "./MenuItems";
import TopBar from "./TopBar";
import styles from "./styles.module.css";
import { Navtext } from "../../customStyledComponents/texts";

const BrandLogoBox = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "auto",
  [theme.breakpoints.up("md")]: {
    width: "250px",
  },
}));

const NavContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#2a2b40",
  height: "10vh",
}));

// User Logo with navigation items
const UserLogo = ({ size, setIsLoggedin }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "profile-popover" : undefined;

  return (
    <React.Fragment>
      <Box
        aria-describedby={id}
        onClick={handleClick}
        sx={{
          height: size === "large" ? "60px" : "40px",
          width: size === "large" ? "60px" : "40px",
          borderRadius: "50%",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <img
          src={profile}
          alt="Jane Doe"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Link to="/profile/mypolicies">
          <ListItemButton sx={{ width: "200px", m: 1 }}>
            <ImProfile className={styles.icon} />
            <Typography sx={{ fontSize: ".9rem", lineHeight: "27px" }}>
              Profile
            </Typography>
          </ListItemButton>
        </Link>
        <Link to="/home">
          <ListItemButton
            sx={{ width: "200px", m: 1 }}
            onClick={() => {
              localStorage.removeItem("login");
            }}
          >
            <FiLogOut className={styles.icon} />
            <Typography sx={{ fontSize: ".9rem", lineHeight: "27px" }}>
              Logout
            </Typography>
          </ListItemButton>
        </Link>
      </Popover>
    </React.Fragment>
  );
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [navbarElevation, setNavbarElevation] = React.useState(false);
  const [showTopBar, setShowTopBar] = React.useState(true);

  const [isLoggedin, setIsLoggedin] = React.useState(
    localStorage.getItem("login")
  );

  let location = useLocation();

  React.useEffect(
    (menuOpen) => {
      setMenuOpen(false);
    },
    [location.pathname]
  );

  const toggleMenuVisibility = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMenuOpen(open);
  };

  var prevPos = window.scrollY;
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavbarElevation(true);
      setShowTopBar(false);
    } else {
      setShowTopBar(true);
      setNavbarElevation(false);
    }

    let currentPos = window.scrollY;
    let navbar = document.getElementById("navbar");
    let navHeight = navbar.clientHeight;

    if (prevPos > currentPos) {
      navbar.style.top = "0px";
    } else if (currentPos > 200) {
      navbar.style.top = `-${navHeight}px`;
    }
    prevPos = currentPos;
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <React.Fragment>
      <AppBar color="inherit" elevation={navbarElevation ? 1 : 0} id="navbar">
        {/* <Hidden mdDown>{showTopBar ? <TopBar /> : null}</Hidden> */}
        <NavContainer>
          <BrandLogoSection setMenuOpen={setMenuOpen} />
          <ul className={styles.navlist}>
            <Hidden mdDown>
              <li className={styles.navlistItem}>
                <ProductsMenu />
              </li>
              <li className={styles.navlistItem}>
                <Navtext>Get a Quote</Navtext>
              </li>
              {isLoggedin ? (
                <>
                  <Link to="/profile/mypolicies">
                    <li className={styles.navlistItem}>
                      <Navtext>My Policies</Navtext>
                    </li>
                  </Link>
                  <Link to="/profile/mydocs">
                    <li className={styles.navlistItem}>
                      <Navtext>My Documents</Navtext>
                    </li>
                  </Link>
                </>
              ) : null}
            </Hidden>
            {isLoggedin ? (
              <li>
                <UserLogo size="small" setIsLoggedin={setIsLoggedin} />
              </li>
            ) : (
              <Link className="Link" to="/login">
                <li onClick={() => setIsLoggedin(true)}>
                  <Button
                    variant="contained"
                    onClick={() => setIsLoggedin(true)}
                  >
                    Login
                  </Button>
                </li>
              </Link>
            )}
          </ul>
        </NavContainer>
        {/** Drawer, displayed on small screen */}
        <Hidden mdUp>
          <Drawer open={menuOpen} onClose={toggleMenuVisibility(false)}>
            <div style={{ minWidth: "350px" }}>
              <Box sx={{ px: 2, py: 1 }}>
                {/** Brand Logo */}
                <BrandLogoSectionMobile setMenuOpen={setMenuOpen} />

                {/** Login Button or Profile Logo */}
                <Box sx={{ mt: 2 }}>
                  {!isLoggedin ? (
                    <Link className="Link" to="/login">
                      <Button
                        fullWidth
                        variant="contained"
                        onClick={() => setIsLoggedin(true)}
                      >
                        Login
                      </Button>
                    </Link>
                  ) : (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <UserLogo size="small" />
                      <Typography sx={{ px: 2, fontSize: "20px" }}>
                        Jane Doe
                      </Typography>
                    </div>
                  )}
                </Box>
              </Box>
              {/** Navigation Menu Items */}
              <MenuItems isLoggedin={isLoggedin} />
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
    </React.Fragment>
  );
}

const BrandLogoSectionMobile = ({ setMenuOpen }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link to="/home">
        <BrandLogoBox>
          <img src={logo} style={{ width: "100%", height: "100%" }} />
        </BrandLogoBox>
      </Link>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu-close"
        onClick={(menuOpen) => setMenuOpen(false)}
      >
        <CloseOutlinedIcon />
      </IconButton>
    </div>
  );
};

const BrandLogoSection = ({ setMenuOpen }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Hidden mdUp>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
          onClick={() => setMenuOpen(true)}
        >
          <MenuOutlinedIcon />
        </IconButton>
      </Hidden>
      <Link to="/home">
        <BrandLogoBox>
          <img src={logo} style={{ width: "100%", height: "100%" }} />
        </BrandLogoBox>
      </Link>
    </div>
  );
};
