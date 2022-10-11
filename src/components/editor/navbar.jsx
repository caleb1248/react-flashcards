import { AppBar, IconButton, Box, Toolbar } from "@mui/material";
import { Save, ArrowBack, Add } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
export default function NavBar({onSaveClick, onCreateClick}) {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="fixed" sx={{height: "64px"}}>
        <Toolbar sx={{ backgroundColor: "rgb(62, 211, 62)", height: "64px"}}>
          <NavLink to="/">
          <IconButton>
            <ArrowBack />
          </IconButton>
          </NavLink>
          <Box sx={{ position: "fixed", right: "20px" }}>
            <IconButton sx={{ marginRight: "10px" }}>
              <Add />
            </IconButton>
            <IconButton sx={{ marginRight: "10px" }}>
              <Save />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
