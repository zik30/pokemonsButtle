import React from 'react';
import stl from './collectionPage.module.scss';
import { useSelector } from 'react-redux';
import CardComp from '../../components/card/CardComp';

function CollectionPage() {
    const collectionPokemons = useSelector(state => state.collection.pokemons); // Берем pokemons

    return (
        <div className={stl.collection}>
            <h2>COLLECTION PAGE</h2>
            <p>This is Your collection! Choose wisely who you want by your side!</p>
            <div className={stl.cards}>
                {collectionPokemons.length > 0 ? (
                    collectionPokemons.map((pokemon, i) => (
                        <CardComp key={i} name={pokemon.name} url={pokemon.url} png={pokemon.img}/>
                    ))
                ) : (
                    <p>The Collection is Empty! Fill it with your POKEMONS!</p>
                )}
            </div>
        </div>
    );
}

export default CollectionPage;
