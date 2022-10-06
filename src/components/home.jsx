import { IconButton, TextField, Box } from "@mui/material";
import { Navigate } from 'react-router-dom';
import {useState} from 'react'
import { Add } from "@mui/icons-material";


export default function Home() {
	const [x, setX] = useState(null);
	function generateID() {
		return Math.round(Math.random() * 2000).toString();
	}


	return (
		<>
			<Box
				sx={{
					display: "grid",
					width: "calc(100vw - 60px)",
					gap: "1rem",
					margin: "1rem"
				}}
			>

			</Box>
			<IconButton
				sx={{
					position: "fixed",
					right: 10,
					bottom: 10,
					backgroundColor: "rgb(62, 211, 62)",

					"&:hover": {
						backgroundColor: "rgb(62, 211, 62)",
					},
				}}
				onClick={() => {
					var id = generateID();
					localStorage.setItem("keys", JSON.stringify([
						...JSON.parse(localStorage.getItem("keys")),
						id
					]));
					localStorage.setItem(id, JSON.stringify({
						keys: [],
					}));

					setX(`/editor/${id}`);
				}}
			>
				<Add />
			</IconButton>
			{
				x !== null? <Navigate to={x} />: ""
			}
		</>
	);
}
