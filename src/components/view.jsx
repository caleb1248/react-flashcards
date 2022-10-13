import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { ChevronRight, ChevronLeft, ArrowForward, Edit } from "./icons";
import Card from './card';
import getDeck from '../getDecks'
export default function View() {
	const { theID: id } = useParams();
	const deck = getDeck(id),
		keys = deck.keys.sort(() => 0.5 - Math.random());

	if(keys.length == 0) {
		return (
			<Box sx={{
			width: "100vw",
			height: "100vh",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column"
		}} className="roboto thin">
				<h1>This deck has no cards</h1>
				<p>
					Go to the editor to add some cards
					<NavLink to={`/editor/${id}`}>
						<IconButton>
							<ArrowForward />
						</IconButton>
					</NavLink>
				</p>
		</Box>
		)
	}
	
	const [index, setIndex] = useState(0);

	return (
		<>
			<Box sx={{
				margin: 0,
				padding: 0,
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
			<NavLink to={`/editor/${id}`} style={{
					position: "fixed",
					bottom: "10px",
					right: "10px"
				}}>
					<IconButton>
						<Edit />
					</IconButton>
				</NavLink>
		</>
	)
}