import React from "react";
import { useSelector } from "react-redux";
import stl from "./buttle.module.scss";
import CardComp from "../../components/card/CardComp";

function CollectionPage() {
  const collectionPokemons = useSelector((state) => state.collection.pokemons);
  const rival1 = useSelector((state) => state.buttle.pokemon1);
  const rival2 = useSelector((state) => state.buttle.pokemon2);

  return (
    <div className={stl.buttle}>
      <h2>Buttles</h2>
      <div>
        <p>Choose two character and let's which one is stronger!</p>
        <div>
          <CardComp name={rival1.name} png={rival1.img} url={rival1.url} />
          <CardComp name={rival2.name} png={rival2.img} url={rival2.url} />
        </div>
      </div>
      <div className={stl.cards}>
        {collectionPokemons.length > 0 ? (
          collectionPokemons.map((pokemon, i) => (
            <CardComp name={pokemon.name} url={pokemon.url} png={pokemon.img} />
          ))
        ) : (
          <p>The Collection is Empty! Fill it with your POKEMONS!</p>
        )}
      </div>
    </div>
  );
}

export default CollectionPage;
