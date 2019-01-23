export function commaSeparate(listOfValues) {
  return listOfValues.join(', ');
}

export function properCase(name) {
  return `${name.charAt(0).toUpperCase()}${name.substring(1)}`;
}

export function catchPokemon(pokeData) {
  return pokeData.name
    ? {
        name: properCase(pokeData.name),
        images: pokeData.sprites,
        moves: pokeData.moves.map(prop => prop.move.name),
        types: pokeData.types.map(prop => prop.type.name),
        items: pokeData.held_items.map(prop => prop.item.name)
      }
    : null;
}