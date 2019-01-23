import React, { useState } from "react";
import PokeDexNav from './PokeDexNav';
import PokeGrid from './PokeGrid';

/* 
With the introduction of Hooks in React,
everything can be expressed as a function.
We'll make our PokeDex doing just that.
*/

function PokeDex() {
  const [search, setSearch] = useState("");

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <PokeDexNav
        searchValue={search}
        onSearchChange={handleSearchChange}
      />
      <PokeGrid searchValue={search} />
    </>
  );
}

export default PokeDex;