import React from 'react';
import Grid from "@material-ui/core/Grid";

import Pokemon from "./Pokemon";
import { NUMBER_POKEMON } from './constants';

function PokeGrid({ searchValue }) {
  const blankSlate = Array(NUMBER_POKEMON).fill('put pokemon here');

  const pokemon = blankSlate.map((_, index) =>
    <Pokemon key={index} id={index + 1} search={searchValue} />
  );

  return (
    <Grid
      style={{ alignSelf: "center" }}
      justify="flex-start"
      container
      spacing={8}
    >
      {pokemon}
    </Grid>
  )
}

export default PokeGrid;
