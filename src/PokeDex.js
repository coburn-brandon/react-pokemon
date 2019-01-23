import React from "react";
import Grid from '@material-ui/core/Grid';

import Pokemon from './Pokemon';

/* 
With the introduction of Hooks in React,
everything can be expressed as a function.

We'll make our PokeDex doing just that.
*/

function PokeDex() {
  return (
    <>
      <Grid
        style={{ alignSelf: "center" }}
        justify="flex-start"
        container
        spacing={8}
      >
        <Pokemon id={4} />
      </Grid>
    </>
  );
}

export default PokeDex;
