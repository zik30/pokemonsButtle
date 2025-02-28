import React, { useEffect, useState } from "react";
import { PushpinOutlined , ThunderboltOutlined } from "@ant-design/icons";
import { Card } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemon } from "../../store/collectionSlice";
import stl from "./card.module.scss"
import { addPokemon1, addPokemon2 } from "../../store/buttleSlice";
const { Meta } = Card;

function CardComp({ name, url, png}) {
  const [img, setImg] = useState('')
  const [ clicked, setClicked] = useState(false)
  const [ inButtle, setinButtle] = useState(false)
  const dispatch = useDispatch()

  const getPokImg = async ()=>{
    const response = await axios.get(url)
    setImg(response.data.sprites.other.dream_world.front_default)
  }
  useEffect(() => {
      getPokImg()
  }, [url]);

  const myPokemons = useSelector(store => store.collection.pokemons)

  useEffect(() => {
    const isAlreadyAdded = myPokemons.some(pokemon => pokemon.name === name);
    setClicked(isAlreadyAdded);
  }, [myPokemons, name]);

  const addToCollection = () =>{
    if (clicked) {
      dispatch(removePokemon(name)); // Удаляем покемона
    } else {
      dispatch(addPokemon({ name, img, url })); // Добавляем покемона
    }
    setClicked(!clicked)
  }

  const addtoButtle = ()=>{
    if(!inButtle){
      dispatch( addPokemon1({name, img, url}))
      setinButtle(false)
    } else {
      dispatch( addPokemon2({name, img, url}))
    }
  }

  return (
    <div>
      <Card
        className={stl.card}
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src={png ? png : img}
          />
        }
        actions={[
          <PushpinOutlined className={clicked && stl.clicked } onClick={addToCollection} key="add"/>,
          <ThunderboltOutlined onClick={addtoButtle} key="buttle" />
        ]}
      >
        <Meta title={name} description={url} />
      </Card>
    </div>
  );
}

export default CardComp;
