import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import { imageViews } from "./constants";
import { commaSeparate } from "./utils";
import styles from './styles/PokemonCard.styles';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function PokemonCard({ pokemon, open, onClose }) {
  return pokemon && (
    <Dialog
      TransitionComponent={Transition}
      keepMounted
      maxWidth="xs"
      scroll="paper"
      open={open}
      onClose={onClose}
    >
      <DialogTitle style={styles.title}>{pokemon.name}</DialogTitle>

      <DialogContent
        style={styles.content}
      >
        <Avatar
          style={styles.avatar}
          src={pokemon.images[imageViews[0]]}
        />

        <Typography style={styles.types}>
          {commaSeparate(pokemon.types)}
        </Typography>

      </DialogContent>
    </Dialog>
  );
}

export default PokemonCard;
