import { Box, IconButton } from "@mui/material";
import { OpenInNew , Edit } from "./icons";
import { NavLink } from "react-router-dom";

export default function HomeCard({ cardKey }) {
  return (
			<Box
				sx={{
					width: 200,
					height: 300,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "rgb(62, 211, 62)",
					borderRadius: 5,
					position: "relative"
				}}
			>
				{JSON.parse(localStorage.getItem(cardKey)).title}
				
				<NavLink to={`/editor/${cardKey}`} style={{
					position: "absolute",
					left: "20%",
					bottom: "30px"
				}} 
					children={
						<IconButton 
							children={<Edit />}
						/>
					}
				/>

				<NavLink to={`/view/${cardKey}`} style={{
					position: "absolute",
					right: "20%",
					bottom: "30px"
				}} 
					children={
						<IconButton 
							children={<OpenInNew />}
						/>
					}
				/>
			</Box>
  );
}
