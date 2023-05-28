import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { TextField, Tooltip } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
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
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [rollAnchor, setRollAnchor] = React.useState(null);

  const open = Boolean(anchorEl);
  const rollOpen = Boolean(rollAnchor);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleRollClick = (event) => {
    setRollAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleRollClose = () => {
    setRollAnchor(null);
  };

  const changeHandler = (e) => {
    console.log(e.target.value);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Student Record
          </Typography>

          <Search style={{ marginRight: "20px" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <div>
            <Tooltip title="Filter List">
              <IconButton onClick={handleClick}>
                <FilterListIcon style={{ color: "white" }} />
              </IconButton>
            </Tooltip>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              position="relative"
              style={{ overflow: "auto" }}
            >
              <MenuItem onClick={handleRollClick}>Roll Number</MenuItem>
              <MenuItem onClick={handleClose}>Student Name</MenuItem>
              <MenuItem onClick={handleClose}>Total Marks</MenuItem>
              <MenuItem onClick={handleClose}>Gender</MenuItem>
              <MenuItem onClick={handleClose}>Branch</MenuItem>
              <MenuItem onClick={handleClose}>Course</MenuItem>
              <MenuItem onClick={handleClose}>Section</MenuItem>
              <Menu
                id="basic-menu"
                anchorEl={rollAnchor}
                open={rollOpen}
                onClose={handleRollClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                style={{
                  position: "absolute",
                  left: "-10%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  padding: "1em",
                  flexGrow: '1'
                }}
              >
                <TextField
                  id="standard-select-currency"
                  select
                  label="Select"
                  defaultValue="<="
                  variant="standard"
                  name="compare"
                  style={{ margin: "0 20px" }}
                  onChange={changeHandler}
                >
                  <MenuItem value="&lt=">&lt;=</MenuItem>
                  <MenuItem value="&gt=">&gt;=</MenuItem>
                </TextField>
                <TextField
                  id="standard-basic"
                  label="Roll Number"
                  variant="standard"
                  name="rollNumber"
                  onChange={changeHandler}
                />
                <Button>Submit</Button>
              </Menu>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
