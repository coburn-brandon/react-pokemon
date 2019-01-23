import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import styles from './styles/Pokemon.styles';

const Pokemon = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card style={styles.card}>

      </Card>
    </Grid>
  );
};

export default Pokemon;
