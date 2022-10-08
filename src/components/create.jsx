import {
	TextField,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button
} from "@mui/material"
import { useRef, useState } from 'react';

export default function CreateDialog({onSuccess, onCancel}) {
	const [text, setText] = useState(""),
		[typed, setTyped] = useState(false),
		name = useRef(null);
	return (
		<Dialog open={true} onClose={onCancel}>
			<DialogTitle>
				Name your deck
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
					onChange={e => {
						if(e.target.value == "") setTyped(false);
						setText(e.target.value)
					}}
					error={typed && (!text || !text.trim())}
					helperText={typed && (!text || !text.trim() )? "Provide a name": ""}
					onBlur={() => setTimeout(() => setTyped(true), 500)}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => onCancel()}>Cancel</Button>
				<Button variant="contained" disabled={!text || !text.trim()} onClick={() => onSuccess(name.current.value)}>Go</Button>
			</DialogActions>
		</Dialog>
	)
}