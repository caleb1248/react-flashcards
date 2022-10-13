import { AppBar, IconButton, Box, Toolbar, TextField } from "@mui/material";
import { Save, ArrowBack, Add, IosShareSharp, Delete, OpenInNew } from "@mui/icons-material";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import NameEditor from "./nameEditor";
export default function NavBar({onSaveClick, onCreateClick, onExport, onDelete}) {
	const { theID } = useParams();
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="fixed" sx={{height: "64px"}}>
        <Toolbar sx={{ backgroundColor: "rgb(62, 211, 62)", height: "64px"}}>
          <NavLink to="/" onClick={onSaveClick}><IconButton><ArrowBack /></IconButton></NavLink>
					<NameEditor />
          <Box sx={{ position: "fixed", right: "20px" }}>
            <IconButton sx={{ marginRight: "10px" }} onClick={onCreateClick}>
              <Add />
            </IconButton>
            <IconButton sx={{ marginRight: "10px" }} onClick={onSaveClick}>
              <Save />
            </IconButton>
						<IconButton sx={{ marginRight: "10px" }} onClick={onExport}>
              <IosShareSharp />
            </IconButton>
						<IconButton sx={{ marginRight: "10px" }} onClick={onDelete}>
              <Delete />
            </IconButton>
						<NavLink to={`/view/${theID}`} children={<IconButton sx={{ marginRight: "10px" }} children={<OpenInNew />} onClick={() => onSaveClick()}/>}/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
