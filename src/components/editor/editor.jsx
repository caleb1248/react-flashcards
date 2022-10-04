import { IconButton, TextField, Box } from "@mui/material";
import { Add } from "@mui/icons-material";
import Card from "./card";
import { useState } from "react";

export default function Editor() {
  function generateKey() {
    return Math.round(Math.random() * 2000).toString();
  }

  const [keys, setKeys] = useState([]);

  const [cards, setCards] = useState([]);

  return (
    <>
      <Box
        sx={{
          display: "grid",
          width: "calc(100vw - 60px)",
          gap: "1rem",
        }}
      >
        {keys.map((key) => {
          const card = cards[key];
          console.log(cards);
          return (
            <Card
              key={key}
              front={card.front}
              back={card.back}
              onDelete={() => {
                delete cards[key];
                setKeys((value) => {
                  value.splice(value.indexOf(key), 1);
                  return value;
                });
              }}
              onSetFront={(newValue) => {
                setCards((c) => {
                  c[key].front = newValue;
                  return c;
                });
              }}
              onSetBack={(newValue) => {
                setCards((c) => {
                  c[key].back = newValue;
                  return c;
                });
              }}
            />
          );
        })}
      </Box>
      <IconButton
        sx={{
          position: "fixed",
          right: 10,
          bottom: 10,
          backgroundColor: "rgb(62, 211, 62)",

          "&:hover": {
            backgroundColor: "rgb(62, 211, 62)",
          },
        }}
        onClick={() => {
          const key = generateKey();
          setCards(c => {
            c[key] = {
              front: "",
              back: "",
            };
            return c;
          });

          console.log(cards);

          setKeys((currentKeys) => [...currentKeys, key]);
        }}
      >
        <Add />
      </IconButton>
    </>
  );
}
