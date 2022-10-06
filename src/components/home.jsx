import { IconButton, TextField, Box } from "@mui/material";
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
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
					width: "calc(100vw - 100px)",
					margin: 0,
					padding: "1rem",
					display: "flex",
					flexFlow: "row wrap",
					gap: "1rem"
				}}
			>
				<h1>Your Decks</h1>

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
