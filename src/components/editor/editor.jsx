import { IconButton, TextField, Box } from "@mui/material";
import { Add, Save } from "@mui/icons-material";
import Card from "./card";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import getDeck from '../../getDecks.jsx';

export default function Editor() {
	const { theID } = useParams();
	
	const [ignoreState, rerender] = useState(false);
	const [keys, setKeys] = useState(getDeck(theID).keys);
	const [cards, setCards] = useState((x => {
		delete x.keys;
		return x
	})(getDeck(theID)));

	function generateKey() {
		return Math.round(Math.random() * 2000).toString();
	}

	return (
		<>
			<Box
				sx={{
					width: "calc(100vw - 60px)",
					margin: "1rem",
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
				onClick={() => {
					const key = generateKey();
					setCards(c => {
						c[key] = {
							front: "",
							back: "",
						};
						return c;
					});

					setKeys((currentKeys) => [...currentKeys, key]);
				}}
			>
				<Add />
			</IconButton>
			<IconButton
				sx={{
					position: "fixed",
					right: 60,
					bottom: 10,
					backgroundColor: "rgb(62, 211, 62)",

					"&:hover": {
						backgroundColor: "rgb(62, 211, 62)",
					},
				}}
				onClick={() => localStorage.setItem(theID, JSON.stringify({...cards, "keys": keys}))}
			>
				<Save />
			</IconButton>
		</>
	);
}
