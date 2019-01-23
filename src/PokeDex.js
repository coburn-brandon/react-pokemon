import React from "react";
import PokeGrid from './PokeGrid';

/* 
With the introduction of Hooks in React,
everything can be expressed as a function.

We'll make our PokeDex doing just that.
*/

function PokeDex() {
  return (
    <>
      <PokeGrid />
    </>
  );
}

export default PokeDex;
