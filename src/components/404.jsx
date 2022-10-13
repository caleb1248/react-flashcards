import { Box, Button } from "@mui/material";
import { NavLink } from 'react-router-dom';

export default function NotFound() {
	return (
		<Box sx={{
			width: "100vw",
			height: "100vh",
			margin: 0,
			padding: 0,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column"
		}}>
			<h2 className='roboto thin' style={{textAlign: "center"}}>This page is non-existent</h2>
			<p>
				<Button variant="contained" onClick={() => history.back()}>Go back</Button>
				<NavLink to="/" style={{textDecoration: "none", marginLeft: "10px"}} children={
					<Button variant="contained" ml="5">
						Home
					</Button>
				}/>
			</p>
		</Box>
	);
}
