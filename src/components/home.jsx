import { IconButton, TextField, Box } from "@mui/material";
import { Navigate, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Add } from "./icons";
import CreateDialog from './create';
import HomeCard from "./homeCard";

export default function Home() {
	const [x, setX] = useState(null);
	const [create, setCreate] = useState(false);
	function generateID() {
		return Math.round(Math.random() * 2000).toString();
	}

	return (
		<>
			{
				localStorage.getItem("keys") == "[]"? (
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
						<h2 className='roboto thin' style={{textAlign: "center"}}>You don't have any decks... yet.</h2>
						<p className="roboto">Create a deck to get started<IconButton sx={{backgroundColor: "rgb(62, 211, 62)", marginLeft: "1rem", "&:hover": {backgroundColor: "rgb(62, 211, 62)"}}} children={<Add/>} onClick={() => setCreate(true)}/></p>
					</Box>
				): 
				<>
					<h1 className="roboto thin" style={{textAlign: "center"}}>Your Decks</h1>
					<Box
						sx={{
							width: "calc(100vw - 100px)",
							padding: "1rem",
							display: "flex",
							flexFlow: "row wrap",
							gap: "1rem"
						}}
		
						className="roboto"
					>
						{
							JSON.parse(localStorage.getItem("keys")).map(key => (
								<HomeCard cardKey={key}/>
							))
						}
					</Box>
				</>
			}
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
					localStorage.setItem("keys", JSON.stringify([
						...JSON.parse(localStorage.getItem("keys")),
						id
					]));
					localStorage.setItem(id, JSON.stringify((card1 => {
						var card1 = generateID();
						var newDeck = {
							keys: [card1],
							title: newName,
						}

						newDeck[card1] = {
							front: "",
							back: ""
						}
						
						return newDeck;
					})(generateID())));

					setX(`/editor/${id}`);
				}}/>: ""
			}
		</>
	);
}
