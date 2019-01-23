import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import { imageViews } from "./constants";
import { useFetch } from "./hooks";
import { commaSeparate, catchPokemon } from './utils';
import styles from './styles/Pokemon.styles';

const Pokemon = ({ id, search }) => {
  const pokeData = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const pokemon = catchPokemon(pokeData);

  function matchesSearch() {
    if (!pokemon) {
      return true;
    }

    const lowName = pokemon.name.toLowerCase();
    const lowSearch = search.toLowerCase();

    const matchesName = lowName.includes(lowSearch);
    const matchesType = pokemon.types.some(t => t.includes(lowSearch));

    return matchesName || matchesType;
  }

  return matchesSearch() && (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card style={styles.card}>
        {pokemon ? (
          <CardActionArea>
            <CardMedia
              style={styles.media}
              image={pokemon.images[imageViews[0]]}
              title={pokemon.name}
            />
            <CardContent>
              <Typography
                align="center"
                gutterBottom
                variant="h5"
                component="h2"
              >
                {pokemon.name}
              </Typography>
              <Typography align="center">{commaSeparate(pokemon.types)}</Typography>
            </CardContent>
          </CardActionArea>
        ) : (
          <div style={styles.loader}>
            <CircularProgress style={styles.progress} />
          </div>
        )}
      </Card>
    </Grid>
  );
};

export default Pokemon;
