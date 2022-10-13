import { IconButton, Dialog, DialogTitle, DialogActions, DialogContent, Button } from "@mui/material";
import { Close } from "../icons"

export default function Delete({onConfirm, onCancel}) {
	return (
		<Dialog open={true} onClose={onCancel}>
			<DialogTitle>
				This action is irreversible!
				<IconButton sx={{
					position: "absolute",
					top: 8,
					right: 8
				}} onClick={onCancel}>
					<Close />
				</IconButton>
			</DialogTitle>
			<DialogContent className="roboto">
				This deck will be deleted permanentaly. Are you sure you want to delete this?
			</DialogContent>
			<DialogActions>
				<Button variant="contained" onClick={onCancel}>Cancel</Button>
				<Button onClick={() => onConfirm()}>Confirm</Button>
			</DialogActions>
		</Dialog>
	)
}