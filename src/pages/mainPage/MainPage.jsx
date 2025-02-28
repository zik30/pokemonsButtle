import stl from './mainPage.module.scss'
import CardComp from '../../components/card/CardComp'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons } from '../../store/mainSlice'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function MainPage() {

    const dispatch = useDispatch()
    const pokemons = useSelector( state => state.mainReducer.pokemons)

    const getPokemons = () =>{
        dispatch( getAllPokemons())
    }
    
    useEffect( () =>{
        getPokemons()
    }, [])

    const myPokemons = useSelector(store => store.collection.pokemons)
    console.log(myPokemons)
    

  return (
    <div className={stl.main}>
        <h2>ALL POKEMONS</h2>
        <p>Choose POKEMONS who You want by your side! Choose Wisely!</p>
        <div className={stl.cards}>
            {
                pokemons.map( (pokemon, i) =>(
                    <div key={i}>
                        <CardComp key={i} name={pokemon.name} url={pokemon.url}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MainPage