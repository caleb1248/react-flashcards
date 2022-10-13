import { IconButton, TextField } from "@mui/material";
import { Edit } from "../icons.jsx";
import { useState, useRef } from 'react';
import { useParams } from "react-router-dom";
import getDeck from '../../getDecks.jsx';

export default function NameEditor() {
	const { theID } = useParams();
	const [text, setText] = useState(getDeck(theID).title);
	
	const input = useRef(null);

	return (
		<>
			<TextField
				value={text}
				inputRef={input}
				variant="outlined"
				onFocus={() => input.current.select()}
				onChange={e => setText(e.target.value)}
				onBlur={() => localStorage[theID] = JSON.stringify({...getDeck(theID), title: text})}
				autoComplete="off"
			/>
			<IconButton onClick={() => input.current.focus()} children={<Edit />} sx={{marginLeft: "10px"}}/>
		</>
	);
}
