import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	TextField,
	Button,
	IconButton
} from "@mui/material";

import { Close } from "@mui/icons-material"

export default function exportDialog({onClose, value}) {
	return (
		<Dialog open={true} onClose={() => onClose()} fullWidth={true}>
			<DialogTitle>
				This is your export link.
				<IconButton sx={{
					position: "absolute",
					top: 8,
					right: 8
				}} onClick={() => onClose()}>
					<Close />
				</IconButton>
			</DialogTitle>
			<DialogContent sx={{fontFamily: "Roboto", display: "flex", flexDirection: "column"}}>
				Copy it to a save place.
				<TextField value={value} multiline autoFocus/>
			</DialogContent>
			<DialogActions>
				<Button variant="contained" onClick={() => onClose()}>Ok</Button>
			</DialogActions>
		</Dialog>
	)
}