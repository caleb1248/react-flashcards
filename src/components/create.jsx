import {
	TextField,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	IconButton
} from "@mui/material";

import { Close } from './icons';
import { useRef, useState } from 'react';

export default function CreateDialog({onSuccess, onCancel}) {
	const [text, setText] = useState(""),
		name = useRef(null);
	return (
		<Dialog open={true} onClose={onCancel}>
			<DialogTitle>
				Name your deck
				<IconButton sx={{
					position: "absolute",
					top: "8px",
					right: "8px"
				}} onClick={onCancel}>
					<Close />
				</IconButton>
			</DialogTitle>
			<DialogContent>
				<TextField
					inputRef={name}
					autoFocus
					margin="dense"
					label="Name"
					variant="standard"
					fullWidth
					value={text}
					onChange={e => setText(e.target.value)}
					placeholder="Enter a name"
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => onCancel()}>Cancel</Button>
				<Button variant="contained" onClick={() => onSuccess(name.current.value.trim() == ""? "Untitled deck": name.current.value)}>Go</Button>
			</DialogActions>
		</Dialog>
	)
}