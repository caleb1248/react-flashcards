import { IconButton, TextField, Box } from "@mui/material";
import { Add, Save } from "../icons";
import Card from "./card";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import getDeck from '../../getDecks.jsx';
import NavBar from "./navbar";
import ExportDialog from "./export"
import DeleteDialog from './delete';
export default function Editor() {
	const { theID } = useParams();

	let navigate = useNavigate();
	
	const [ignoreState, rerender] = useState(false);
	const [keys, setKeys] = useState(getDeck(theID).keys);
	const [dialog, setDialog] = useState(<></>);
	const [cards, setCards] = useState((x => {
		delete x.keys;
		return x;
	})(getDeck(theID)));
	
	useEffect(() => {document.title = "Editor | " + cards.title}, [])

	const addCard = () => {
		const key = generateKey();
		setCards(c => {
			c[key] = {
				front: "",
				back: "",
			};
			return c;
		});

		setKeys((currentKeys) => [...currentKeys, key]);
	}

	const saveDeck = () => localStorage.setItem(theID, JSON.stringify({...cards, "keys": keys}));

	function generateKey() {
		return Math.round(Math.random() * 2000).toString();
	}

	return (
		<>
			<NavBar
				onCreateClick={addCard}
				onSaveClick={saveDeck}
				onExport={() => {
					saveDeck();
					setDialog(
						<ExportDialog value={`https://${location.hostname + (location.hostname.includes("caleb1248.github.io")? "/react-flashcards": "")}/import/${btoa(localStorage.getItem(theID))}`} onClose={() => setDialog(<></>)}/>
					)
				}}
				onDelete = {() => {
					setDialog(<DeleteDialog
						onCancel={() => setDialog(<></>)}
						onConfirm={() => {
							localStorage.removeItem(theID);
							localStorage.setItem("keys", (currentKeys => {
								currentKeys.splice(currentKeys.indexOf(theID), 1);
								console.log(currentKeys);
								return JSON.stringify(currentKeys);
							})(JSON.parse(localStorage.getItem("keys"))))
							navigate("/");
						}}
					/>)
				}}
				
			/>
			<Box
				sx={{
					width: "calc(100vw - 100px)",
					padding: "1rem",
					marginTop: "64px",
					display: "flex",
					flexFlow: "row wrap",
					gap: "1rem"
				}}
			>
				{keys.map(key => {
					const card = cards[key];
					return (
						<Card
							sx={{margin: "1rem"}}
							key={key}
							front={card.front}
							back={card.back}
							onDelete={() => {
								setCards(currentCards => {
									delete currentCards[key];
									return currentCards;
								});

								setKeys((value) => {
									value.splice(value.indexOf(key), 1);
									return value;
								});

								rerender(!ignoreState);
							}}
							onSetFront={(newValue) => {
								setCards((c) => {
									c[key].front = newValue;
									return c;
								});
							}}
							onSetBack={(newValue) => {
								setCards((c) => {
									c[key].back = newValue;
									return c;
								});
							}}
						/>
					);
				})}
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
				onClick={addCard}
			>
				<Add />
			</IconButton>
			{dialog}
		</>
	);
}
