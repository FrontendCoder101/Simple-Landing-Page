import { useState } from 'react'
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

import Home from './Home.tsx'


const Navbar = ():JSX.Element => {
  const [openMenu,setOpenMenu] = useState(false)



  const menuOptions=[
    {
  text:'Home',
  icons:<HomeIcon />
    },
    {
  text:'About',
  icons:<InfoIcon />
 },
  {
  text:'Testimonials',
  icons:<CommentRoundedIcon />
  },
  {
  text:'Contact',
  icons:<PhoneRoundedIcon />
  },
  {
  text:'Cart',
  icons:<ShoppingCartRoundedIcon />
  }
  ]

  return (
    <nav>
    <div className="nav-logo-container">
      <img src={Logo} alt="logo"/>
    </div>
    <div className="nav-links-container">
      <NavLink to="/">Home</NavLink>
    </div>
    </nav>
  )
}

export default Navbar