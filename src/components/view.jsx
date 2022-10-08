import { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import Card from './card';
import getDeck from '../getDecks'
export default function View() {
	const deck = getDeck(useParams().theID),
		keys = deck.keys.sort(() => 0.5 - Math.random());

	const [index, setIndex] = useState(0);

	return (
		<Box sx={{
			width: "100vw",
			height: "100vh",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}} className="roboto">
			<IconButton onClick={() => setIndex(index - 1 < 0? keys.length-1 : index-1)}>
				<ChevronLeft />
			</IconButton>
			<Card front={deck[keys[index]].front} back={deck[keys[index]].back} />
			<IconButton onClick={() => setIndex((index + 1) % keys.length)}>
				<ChevronRight />
			</IconButton>

		</Box>
	)
}