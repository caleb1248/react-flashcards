import { IconButton, TextField, Box } from "@mui/material";
import { Delete, Autorenew } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

export default function Card({ front, back, onDelete, onSetFront, onSetBack }) {
  let frontContent = front,
    backContent = back;

  const [flipped, setFlipped] = useState(false);
  const [fflipped, updateFlipped] = useState(false);

  const frontSide = useRef(null),
    backSide = useRef(null),
    card = useRef(null);
  const initialMount = useRef(true);

  useEffect(() => {
    if(initialMount.current) {
      initialMount.current = false;
    } else {
      card.current.style.animation = "flip 1s";
      setTimeout(() => {
        frontSide.current.value = flipped? backContent:frontContent;
        updateFlipped(!fflipped)
        card.current.style.animation = "";
      }, 999);
    }
  }, [flipped])

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
      <Box
        sx={{
          width: 200,
          height: 300,
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
            <TextField ref={frontSide} inputProps={{
              defaultValue: frontContent,

              onChange: e => {
                if(flipped) {
                  backContent = e.currentTarget.value
                  onSetBack(backContent);
                } else {
                  frontContent = e.currentTarget.value
                  onSetFront(frontContent);
                }
              }
            }}/>
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
            <TextField ref={backSide} value={fflipped? frontContent: backContent}/>
          </Box>
        </Box>
        <IconButton
          sx={{
            position: "absolute",
            bottom: 50,
            left: "calc(30% - 20px)",
            transform: `rotate(90deg) scaleY(${flipped ? -1 : 1})`,
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
            transform: `scaleX(${flipped ? -1 : 1})`,
            transition: "transform 1s",
          }}
          onClick={() => onDelete()}
        >
          <Delete />
        </IconButton>
      </Box>
    </>
  );
}
