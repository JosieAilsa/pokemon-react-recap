import { useState } from "react";
import "./Card.scss";
const Card = ({id, image, name, types}) => {
    const [rating, setRating] = useState(0);
    const handleClick = () => {
        const newRating = rating + 1;
        setRating(newRating)
    }
    const typesJSX = types.map(type => <li key={type} className="card__type">{type}</li>)
    const capitalisedName = name[0].toUpperCase() + name.substring(1);
    return (
    <section className="card">
        <img src={image} alt="" />
        <div className="card__content">
            <h4 className="card__heading">{capitalisedName}</h4>
            <ul className="card__types">
                {capitalisedName} number#{id}. Its types are: 
                {typesJSX}
            </ul>
            <button className="card__button" onClick={handleClick}>Give ❤️</button>
            <p className="card__text">My ❤️ rating: {rating}</p>
        </div>
    </section>
    );
}
 
export default Card;