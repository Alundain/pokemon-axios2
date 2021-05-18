import React, {useState, useEffect} from 'react'
import fetchAxios from '../actions/fetchAxios';


const PokemonAxios = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getPokemon = async() => {
            try{
                const arr = await fetchAxios();
                setItems(arr);  
            } catch(err){
                alert(err);
            }
        };
        getPokemon();
    },[]);

    const listItems = items.map((name,key) => <li key={key}>{name}</li>);
    return (
        <section className="pokemon-section">
            <ul>{listItems}</ul>   
        </section>
    )
};

export default PokemonAxios
