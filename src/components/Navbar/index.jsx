import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Box, Toolbar, Typography, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SelectorComponent from "../selectorComponent";
import SortComponent from "../sortComponent";
import {useDispatch, useSelector} from 'react-redux'
import { setSearchValue } from "../../slice/recipeSlice";
import {debounce} from 'lodash'
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {

  const dispatch = useDispatch();

  const onSearchChange = debounce((e) => {
     dispatch(setSearchValue(e.target.value.toLowerCase()));
  }, 250)

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" sx={{height: 80, display: "flex", justifyContent: "center"}}>
        <Toolbar>
          
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Link to='/' style={{textDecoration:"none", color:"inherit"}}>CookBook</Link>
          </Typography>
          <Search style={{width: 450, marginLeft: 50, borderRadius: 40, textAlign: "left"}} onChange={onSearchChange}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase sx={{width: 450}}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          
        <Box sx={{ display: { xs: "none", md: "flex" }, marginRight: "30px"}}>
          <Link to='/favorites'>
        <IconButton aria-label="add to favorites" sx={{color: "#ff1744",  }}>
          <FavoriteIcon />
        </IconButton>
        </Link>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <SelectorComponent />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <SortComponent />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
