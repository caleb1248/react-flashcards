import { Box } from "@mui/material";
import { useState } from "react";

export default function Card({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box
      sx={{
        width: 200,
        height: 300,
        cursor: "pointer",
        perspective: 1000,
      }}
      onClick={() => setFlipped(!flipped)}
    >
      <Box
        sx={{
          width: 200,
          height: 300,
          transform: `rotateY(${flipped ? 180 : 0}deg)`,
          transition: "transform 1s",
          transformStyle: "preserve-3d",
        }}
      >
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
          {front}
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
            transform: "rotateY(180deg)",
            borderRadius: 5,
          }}
        >
          {back}
        </Box>
      </Box>
    </Box>
  );
}
