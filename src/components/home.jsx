import { IconButton, TextField, Box } from "@mui/material";
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Add } from "@mui/icons-material";
import CreateDialog from './create';

export default function Home() {
	const [x, setX] = useState(null);
	const [create, setCreate] = useState(false);
	function generateID() {
		return Math.round(Math.random() * 2000).toString();
	}


	return (
		<>
			<h1 className="roboto thin">Your Decks</h1>
			<Box
				sx={{
					width: "calc(100vw - 100px)",
					margin: 0,
					padding: "1rem",
					display: "flex",
					flexFlow: "row wrap",
					gap: "1rem"
				}}

				className="roboto"
			>
				{
					JSON.parse(localStorage.getItem("keys")).map(key => key)
				}
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
				onClick={() => setCreate(true)}
			>
				<Add />
			</IconButton>
			{
				x !== null ? <Navigate to={x} /> : ""
			}
			{
				create? <CreateDialog onCancel={() => setCreate(false)} onSuccess={newName => {
					var id = generateID();
					alert(newName);
					localStorage.setItem("keys", JSON.stringify([
						...JSON.parse(localStorage.getItem("keys")),
						id
					]));
					localStorage.setItem(id, JSON.stringify({
						keys: [],
						title: newName
					}));

					setX(`/editor/${id}`);
				}}/>: ""
			}
		</>
	);
}
