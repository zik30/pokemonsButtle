import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import stl from "./buttle.module.scss";
import { getDataRival1, getDataRival2 } from '../../store/buttleSlice'
import CardComp from "../../components/card/CardComp";

function CollectionPage() {
  const collectionPokemons = useSelector((state) => state.collection.pokemons);
  const rival1 = useSelector((state) => state.buttle.pokemon1);
  const rival2 = useSelector((state) => state.buttle.pokemon2);
  const [ winner, setWinner ] = useState({name: null})
  console.log(rival1)

    
    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(getDataRival1(rival1.url))
    }, [rival1])

    const rival1Data = useSelector( state => state.buttle.data1)

    const calculateData = (pokemon) =>{
        if (!pokemon ) return 0;
        let sum = 0
        pokemon.map((stat)=>{
            sum +=stat.base_stat
        })
        return sum
    }
    const raitingRival1 = calculateData(rival1Data)
    console.log(raitingRival1)
    




    useEffect( ()=>{
        dispatch(getDataRival2(rival2.url))
    }, [rival2])
    const rival2Data = useSelector( state => state.buttle.data2)
    console.log(rival2Data)

    const raitingRival2 = calculateData(rival2Data)
    console.log(raitingRival2)

    const getWinner = () =>{
        if(raitingRival1 > raitingRival2) setWinner(rival1)
        if(raitingRival1 < raitingRival2) setWinner(rival2)
        else setWinner({name: 'the FRIENDSHIP'})
    }



  return (
    <div className={stl.buttle}>
      <h2>Buttles</h2>
      <div>
        <p>Choose two character and let's which one is stronger!</p>
        <div className={stl.buttle_inner}>
            {rival1 && <CardComp name={rival1.name} png={rival1.img} url={rival1.url} />}
          <button onClick={getWinner}><h5>VS</h5></button>
          {rival2 && <CardComp name={rival2.name} png={rival2.img} url={rival2.url} />}
        </div>
        <h3>The WINNER IS: {winner.name ? winner.name : "No battle yet"} 🎉</h3>
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
