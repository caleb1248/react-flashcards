import { IconButton, TextField, Box, Card as MuiCard } from "@mui/material";
import { Delete, Autorenew } from "@mui/icons-material";
import { useRef, useState } from "react";
import useEffect from '../../useEffectOnUpdate';
export default function Card({ front, back, onDelete, onSetFront, onSetBack }) {
	let [frontContent, setFront] = useState(front),
		[backContent, setBack] = useState(back);

	const [flipped, setFlipped] = useState(false);
	const [fflipped, updateFlipped] = useState(false);

	const frontSide = useRef(null),
		backSide = useRef(null),
		card = useRef(null);

	useEffect(() => {
		card.current.style.animation = "";
		card.current.style.animation = "flip 1s";
		setTimeout(() => {
			updateFlipped(!fflipped);
			card.current.style.animation = "";
		}, 999);
	}, [flipped]);

	useEffect(() => {
		onSetFront(frontContent);
	}, [frontContent]);

	useEffect(() => {
		onSetBack(backContent);
	}, [backContent]);

	return (
		<>
			<style>{`
        @keyframes flip {
          0% {
            transform: rotateY(0deg)
          }

          100% {
            transform: rotateY(180deg)
          }
        }
      `}</style>
			<MuiCard sx={{
				width: 210,
				height: 350,
				padding: 1,
				borderRadius: 5,
				display: "flex",
				justifyContent: "center"
			}}>
				<Box
					sx={{
						width: 200,
						height: 400,
						perspective: 1000,
					}}
				>
					<Box ref={card} sx={{
						transformStyle: "preserve-3d",
						width: 200,
						height: 300,
					}}>
						<Box
							sx={{
								position: "absolute",
								top: 0,
								width: "100%",
								height: "100%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								backfaceVisibility: "hidden",
								backgroundColor: "rgb(62, 211, 62)",
								borderRadius: 5,
							}}
						>
							<TextField
								ref={frontSide}
								autoComplete="off"
								value={fflipped ? backContent : frontContent}
								onChange={e => {
									if (flipped) {
										setBack(e.target.value);
									} else {
										setFront(e.target.value);
									}
								}}
							/>
						</Box>
						<Box
							sx={{
								position: "absolute",
								top: 0,
								width: "100%",
								height: "100%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								backfaceVisibility: "hidden",
								backgroundColor: "rgb(62, 211, 62)",
								borderRadius: 5,
								transform: "rotateY(180deg)"
							}}
						>
							<TextField ref={backSide} value={fflipped ? frontContent : backContent} />
						</Box>
					</Box>

					<IconButton
						sx={{
							position: "absolute",
							bottom: 50,
							left: "calc(30% - 20px)",
							transform: "rotate(90deg)",
							transition: "transform 1s",
						}}
						onClick={() => setFlipped(!flipped)}
					>
						<Autorenew />
					</IconButton>
					<IconButton
						sx={{
							position: "absolute",
							bottom: 50,
							left: "calc(70% - 20px)",
							transition: "transform 1s",
						}}
						onClick={onDelete}
					>
						<Delete />
					</IconButton>
				</Box>
			</MuiCard>
		</>
	);
}
