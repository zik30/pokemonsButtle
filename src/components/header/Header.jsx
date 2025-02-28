import { Link } from "react-router-dom"
import stl from "./header.module.scss"


function Header() {
  return (
    <div className={stl.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="logo Pokemon" />
        <div>
            <Link to={"/"}>Pokemons</Link>
            <Link to={"/collection"}>Collection</Link>
            <Link to={"/buttle"}>Buttle</Link>
        </div>
    </div>
  )
}

export default Header