import "./CardContainer.scss"
import pokemonArray from "../../data/data";
import Card from "../../components/Card/Card";

const CardContainer = () => {
    const pokemonCardJSX = pokemonArray.map(pokemon => {
        return <Card key ={pokemon.id} id = {pokemon.id} image={pokemon.sprite} name={pokemon.name} types={pokemon.types}/>
    })
    return (
    <main>
        <h1>My Pokemon Page</h1>
        <div className="card-container">
            {pokemonCardJSX}
        </div>
    </main>);
}
 
export default CardContainer;