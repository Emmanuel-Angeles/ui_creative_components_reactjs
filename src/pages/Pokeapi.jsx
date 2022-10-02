import { useState, useEffect } from "react";

const Pokeapi = () => {
    const [pokemons, setPokemons] = useState([])

    const API = "https://pokeapi.co/api/v2/pokemon/?limit=40&offset=40"

    const obtenerPokemons = async () => {
        const response = await fetch(API)
        const results = await response.json()

        const pokemonsArray = []
        for (const pokemon of results.results ) {
            const response = await fetch(pokemon.url)
            const pokemonDetails = await response.json()
            pokemonsArray.push({
                id: pokemonDetails.id,
                name: pokemonDetails.name,
                type: pokemonDetails.types[0].type.name,
                order: pokemonDetails.order,
                image: pokemonDetails.sprites.other["official-artwork"].front_default,
            })
        }
        setPokemons(pokemonsArray)
    }

    useEffect(() => {
        (async ()=> {
            await obtenerPokemons()
        })()
    }, [])

    return (
        <div className='container_cards_grid'>
            {
                pokemons.map(item => (
                    <article key={item.id} style={{padding: 15, background: "#1d232e", borderRadius: 10}}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                        <img src={item.image} alt="" style={{width: 200}} />
                        </div>
                        <h1>{item.name}</h1>
                        <h1>{item.order}</h1>
                    </article>
                ))
            }
            <article>

            </article>
        </div>
    )
}

export default Pokeapi